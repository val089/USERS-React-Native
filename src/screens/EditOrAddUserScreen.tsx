import { useCallback, useLayoutEffect } from 'react';
import { FormControl, View, Button, Input } from 'native-base';
import { RootStackNavigation } from '../../App';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser } from '../store/slices/usersSlice';
import { RootState } from '../store/store';
import * as Yup from 'yup';

export const EditOrAddUserScreen = ({
  navigation,
  route
}: RootStackNavigation<'EditOrAddUserScreen'>) => {
  const users = useSelector((state: RootState) => state.users.users);
  const { isEdited, userId } = route.params;
  const dispatch = useDispatch();

  const currentUser = !!userId && users.filter((user) => user.id === userId)[0];

  const defaultValues = {
    username: currentUser ? currentUser.username : '',
    firstName: currentUser ? currentUser.firstName : '',
    lastName: currentUser ? currentUser.lastName : ''
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? 'EDIT USER' : 'ADD NEW USER'
    });
  }, [isEdited, navigation]);

  const onSubmitAddUser = useCallback(
    (data) => {
      const id = `user-${Math.random()}`;
      const newUser = { ...data, id, role: 'user', enabled: true };
      dispatch(addUser({ newUser }));
      navigation.goBack();
    },
    [dispatch, navigation]
  );

  const onSubmitEditUser = useCallback(
    (data) => {
      const editedUser = { ...data, id: userId };
      dispatch(editUser(editedUser));
      navigation.goBack();
    },
    [dispatch, navigation, userId]
  );

  return (
    <Formik
      validateOnChange
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('Is required'),
        lastName: Yup.string().required('Is required'),
        username: Yup.string().required('Is required')
      })}
      initialValues={defaultValues}
      onSubmit={isEdited ? onSubmitEditUser : onSubmitAddUser}
    >
      {({ errors, handleChange, handleBlur, handleSubmit, values }) => (
        <View padding={4}>
          <FormControl isRequired isInvalid={!!errors.username}>
            <Input
              mt={4}
              defaultValue={defaultValues.username}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              values={values.username}
            />
            <FormControl.ErrorMessage>
              {errors.username}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.firstName}>
            <Input
              mt={4}
              defaultValue={defaultValues.firstName}
              placeholder="First name"
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
              values={values.firstName}
            />
            <FormControl.ErrorMessage>
              {errors.firstName}
            </FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={!!errors.lastName}>
            <Input
              mt={4}
              defaultValue={defaultValues.lastName}
              placeholder="Last name"
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
              values={values.lastName}
            />
            <FormControl.ErrorMessage>
              {errors.lastName}
            </FormControl.ErrorMessage>
          </FormControl>
          <Button mt={4} onPress={() => handleSubmit()}>
            {isEdited ? 'EDIT USER' : 'ADD NEW USER'}
          </Button>
        </View>
      )}
    </Formik>
  );
};
