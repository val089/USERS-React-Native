import { FC, useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { RootStackNavigation } from '../../App';

export const UserDetailsScreen: FC<
  RootStackNavigation<'UserDetailsScreen'>
> = ({ route, navigation }) => {
  const { userId } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'User Details Screen'
    });
  }, [navigation]);

  console.log(userId);

  return (
    <View>
      <Text>UserDetailsScreen</Text>
    </View>
  );
};