import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';

// Screens
import { UsersScreen } from './src/screens/UserScreen';

export type RootStackParamList = {
  UsersScreen: undefined;
};

export type RootStackNavigation<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UsersScreen">
          <Stack.Screen name="UsersScreen" component={UsersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
