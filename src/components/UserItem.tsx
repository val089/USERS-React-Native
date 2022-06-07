import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../styles/globalStyles';

interface UserItemProps {
  firstName: string;
  lastName: string;
}

export const UserItem = ({ firstName, lastName }: UserItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {firstName} {lastName}
      </Text>
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
