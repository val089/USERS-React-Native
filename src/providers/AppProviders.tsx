import React from 'react';
import { Provider } from 'react-redux';
import { NativeBaseProvider, extendTheme } from 'native-base';
import appColors from '../styles/colors';
import store from '../store';
import components from '../styles/components';

const theme = extendTheme({
  colors: appColors,
  components
});

interface Props {
  children: React.ReactNode;
}

const AppProviders = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </Provider>
  );
};

export default AppProviders;
