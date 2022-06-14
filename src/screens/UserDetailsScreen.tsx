import { useLayoutEffect } from 'react';
import { Text, HStack, Box, Avatar, View, Button, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { RootStackNavigation } from '../../App';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Ionicons } from '@expo/vector-icons';

export const UserDetailsScreen = ({
  route,
  navigation
}: RootStackNavigation<'UserDetailsScreen'>) => {
  const users = useSelector((state: RootState) => state.users.users);
  const { userId } = route.params;

  const currentUser = users.find((user) => user.id === userId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'User Details Screen'
    });
  }, [navigation]);

  return (
    <View flex={1} padding={4}>
      <HStack bg="primary.200" style={styles.box}>
        <Avatar
          bg="purple.600"
          alignSelf="center"
          size="2xl"
          source={{
            uri: currentUser?.imgUri
          }}
        />
        <Box>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Username:</Text>{' '}
            {currentUser?.username}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>First name:</Text>{' '}
            {currentUser?.firstName}
          </Text>
          <Text style={styles.text}>
            <Text style={styles.textBold}>Last name:</Text>{' '}
            {currentUser?.lastName}
          </Text>
        </Box>
      </HStack>

      <Button
        mt={6}
        bg="primary.200"
        leftIcon={
          <Icon as={Ionicons} name="pencil" color="primary.400" size={6} />
        }
        onPress={() =>
          navigation.navigate('EditOrAddUserScreen', {
            isEdited: true,
            userId
          })
        }
      >
        EDIT USER
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  text: {
    color: '#fff',
    fontSize: 16
  },
  textBold: {
    fontWeight: 'bold'
  }
});
