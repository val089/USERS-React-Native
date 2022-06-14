import { useEffect, useState } from 'react';
import { ListRenderItem } from 'react-native';
import {
  FlatList,
  View,
  Actionsheet,
  useDisclose,
  Text,
  Button,
  VStack,
  HStack,
  Input,
  Icon,
  Radio
} from 'native-base';
import { deleteUser, UserType } from '../store/slices/usersSlice';
import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { RootStackNavigation } from '../../App';

import { UserItem } from '../components/UserItem';
import { Ionicons } from '@expo/vector-icons';

export const UsersScreen = ({
  navigation
}: RootStackNavigation<'UsersScreen'>) => {
  const users = useSelector((state: RootState) => state.users.users);

  const [deletedItemId, setDeletedItemId] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<UserType[] | []>([]);
  const [filterType, setFilterType] = useState('firstName');

  const { isOpen, onOpen, onClose } = useDisclose();
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const onSearch = debounce((search: string) => {
    const newData = users.filter((user) => {
      if (filterType === 'firstName') {
        return user.firstName.toLowerCase().includes(search.toLowerCase());
      } else if (filterType === 'lastName') {
        return user.lastName.toLowerCase().includes(search.toLowerCase());
      } else if (filterType === 'role') {
        return user.role.toLowerCase().includes(search.toLowerCase());
      }
    });
    setFilteredUsers(newData);
  }, 300);

  const onDelete = (id: string) => {
    setDeletedItemId(id);
    onOpen();
  };

  const deleteUserHanlder = () => {
    dispatch(deleteUser({ id: deletedItemId }));
    onClose();
  };

  const renderUser: ListRenderItem<UserType> = (itemData) => {
    return <UserItem {...itemData.item} onDelete={onDelete} />;
  };

  return (
    <>
      <View flex={1} padding={4}>
        <Input
          onChangeText={onSearch}
          placeholder="Search user"
          InputRightElement={
            <Icon
              mr={2}
              size="8"
              color="primary.100"
              as={<Ionicons name="ios-search" />}
            />
          }
        />

        <View my={4}>
          <Text>Filters:</Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={filterType}
            onChange={(nextValue) => {
              setFilterType(nextValue);
            }}
          >
            <Radio value="firstName" my={1}>
              By first name
            </Radio>
            <Radio value="lastName" my={1}>
              By last name
            </Radio>
            <Radio value="role" my={1}>
              By last role
            </Radio>
          </Radio.Group>
        </View>

        <FlatList data={filteredUsers} renderItem={renderUser} />
        <Button
          onPress={() =>
            navigation.navigate('EditOrAddUserScreen', {
              isEdited: false,
              userId: ''
            })
          }
        >
          ADD NEW USER
        </Button>
      </View>

      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <VStack p={4}>
            <Text fontSize={20} textAlign="center">
              Are you sure you want to delete this user?
            </Text>
            <HStack space={4} justifyContent="center" my={6}>
              <Button onPress={onClose}>CANCEL</Button>
              <Button onPress={deleteUserHanlder}>DELETE</Button>
            </HStack>
          </VStack>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
