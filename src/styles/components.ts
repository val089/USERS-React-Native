import { ComponentTheme } from 'native-base';

const Input: ComponentTheme = {
  baseStyle: {},
  defaultProps: {
    height: '50px',
    borderRadius: '8px',
    borderColor: 'primary.200',
    fontSize: '16px',
    color: '#000',
    selectionColor: '#000',
    _text: {
      fontSize: '16px',
      color: '#000'
    },
    _focus: {
      borderWidth: '2px',
      borderColor: 'blue',
      backgroundColor: 'transparent'
    }
  }
};

const components = {
  Input
};

export default components;
