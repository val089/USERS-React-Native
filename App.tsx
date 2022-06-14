import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import AppProviders from './src/providers/AppProviders';

import { UsersScreen } from './src/screens/UsersScreen';
import { UserDetailsScreen } from './src/screens/UserDetailsScreen';
import { EditOrAddUserScreen } from './src/screens/EditOrAddUserScreen';

export type RootStackParamList = {
  UsersScreen: undefined;
  UserDetailsScreen: { userId: string };
  EditOrAddUserScreen: { isEdited: boolean; userId: string };
};

export type RootStackNavigation<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppProviders>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="UsersScreen"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'primary.300'
              },
              headerTintColor: 'white',
              contentStyle: {
                backgroundColor: 'primary.200'
              }
            }}
          >
            <Stack.Screen
              name="UsersScreen"
              component={UsersScreen}
              options={{
                title: 'Users'
              }}
            />
            <Stack.Screen
              name="UserDetailsScreen"
              component={UserDetailsScreen}
            />
            <Stack.Screen
              name="EditOrAddUserScreen"
              component={EditOrAddUserScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProviders>
    </>
  );
}
