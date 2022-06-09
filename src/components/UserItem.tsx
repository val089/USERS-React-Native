import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';
import { deleteUser } from '../store/slices/usersSlice';

interface UserItemProps {
  id: string;
  firstName: string;
  lastName: string;
}

export const UserItem = ({ firstName, lastName, id }: UserItemProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={styles.item}>
      <Pressable
        onPress={() => navigation.navigate('UserDetailsScreen', { userId: id })}
      >
        <Text style={styles.text}>
          {firstName} {lastName}
        </Text>
      </Pressable>

      <Pressable onPress={() => dispatch(deleteUser({ id }))}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 8,
    marginBottom: 10,
    borderRadius: 8
  },
  text: {
    color: GlobalStyles.colors.white
  }
});
