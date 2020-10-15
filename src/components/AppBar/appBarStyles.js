import { StyleSheet } from 'react-native';
import theme from '../../theme';

const appBarStyles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBar,
  },
  separator: {
    marginLeft: 5,
    marginRight: 5,
    color: '#fff',
  },
  tab: {
    color: '#fff',
  },
});

export default appBarStyles;
