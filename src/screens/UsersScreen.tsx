import { FlatList, View, ListRenderItem, StyleSheet } from 'react-native';
import { UserType } from '../store/slices/usersSlice';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

import { UserItem } from '../components/UserItem';

export const UsersScreen = () => {
  const users = useSelector((state: RootState) => state.users.users);

  const onDelete = (id: string) => {
    console.log(id);
  };

  const renderUser: ListRenderItem<UserType> = (itemData) => {
    return <UserItem {...itemData.item} onDelete={onDelete} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList data={users} renderItem={renderUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16
  }
});
