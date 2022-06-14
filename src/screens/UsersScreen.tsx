import { useState } from 'react';
import { ListRenderItem } from 'react-native';
import {
  FlatList,
  View,
  Actionsheet,
  useDisclose,
  Text,
  Button,
  VStack,
  HStack
} from 'native-base';
import { deleteUser, UserType } from '../store/slices/usersSlice';
import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';

import { UserItem } from '../components/UserItem';
import { RootStackNavigation } from '../../App';

export const UsersScreen = ({
  navigation
}: RootStackNavigation<'UsersScreen'>) => {
  const users = useSelector((state: RootState) => state.users.users);
  const [deletedItemId, setDeletedItemId] = useState('');
  const { isOpen, onOpen, onClose } = useDisclose();
  const dispatch = useDispatch();

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
        <FlatList data={users} renderItem={renderUser} />
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
