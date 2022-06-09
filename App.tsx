import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { GlobalStyles } from './src/styles/globalStyles';
import { Provider } from 'react-redux';
import store from './src/store';

import { UsersScreen } from './src/screens/UserScreen';
import { UserDetailsScreen } from './src/screens/UserDetailsScreen';

export type RootStackParamList = {
  UsersScreen: undefined;
  UserDetailsScreen: { userId: string };
};

export type RootStackNavigation<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="UsersScreen"
            screenOptions={{
              headerStyle: {
                backgroundColor: GlobalStyles.colors.primary300
              },
              headerTintColor: GlobalStyles.colors.white,
              contentStyle: {
                backgroundColor: GlobalStyles.colors.primary100
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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
