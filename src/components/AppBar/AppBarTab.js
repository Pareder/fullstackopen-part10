import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import Text from '../Text';
import styles from './appBarStyles';

AppBarTab.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};
AppBarTab.defualtProps = {
  title: '',
  onPress: undefined,
};

function AppBarTab({ title, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={styles.tab} fontWeight="bold">{title}</Text>
    </TouchableWithoutFeedback>
  );
}

export default AppBarTab;
