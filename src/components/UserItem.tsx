import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, Icon, Pressable, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface UserItemProps {
  id: string;
  firstName: string;
  lastName: string;
  onDelete: (id: string) => void;
}

export const UserItem = ({
  firstName,
  lastName,
  id,
  onDelete
}: UserItemProps) => {
  const navigation = useNavigation();

  return (
    <HStack style={styles.item} bg="primary.200">
      <Pressable
        onPress={() => navigation.navigate('UserDetailsScreen', { userId: id })}
      >
        <Text color="primary.400">
          {firstName} {lastName}
        </Text>
      </Pressable>

      <HStack>
        <IconButton
          onPress={() =>
            navigation.navigate('EditOrAddUserScreen', {
              isEdited: true,
              userId: id
            })
          }
          icon={
            <Icon as={Ionicons} name="pencil" color="primary.400" size={6} />
          }
        />
        <IconButton
          onPress={() => onDelete(id)}
          icon={
            <Icon as={Ionicons} name="trash" color="primary.400" size={6} />
          }
        />
      </HStack>
    </HStack>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginBottom: 10,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
