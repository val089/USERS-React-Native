import { FlatList, View, ListRenderItem, StyleSheet } from 'react-native';
import { users, UserType } from '../data/users';
import { UserItem } from '../components/UserItem';

export const UsersScreen = () => {
  const renderUser: ListRenderItem<UserType> = (itemData) => {
    return <UserItem {...itemData.item} />;
  };

  return (
    <View style={styles.screen}>
      <FlatList data={users as UserType[]} renderItem={renderUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16
  }
});
