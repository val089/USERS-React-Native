import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';

interface UserItemProps {
  id: string;
  firstName: string;
  lastName: string;
  onPress: () => void;
}

export const UserItem = ({ firstName, lastName, id }: UserItemProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('UserDetailsScreen', { userId: id })}
    >
      <View style={styles.item}>
        <Text style={styles.text}>
          {firstName} {lastName}
        </Text>
      </View>
    </Pressable>
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
