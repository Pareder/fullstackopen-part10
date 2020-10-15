import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import theme from '../../theme';
import styles from './loaderStyles';

Loader.propTypes = {
  loading: PropTypes.bool,
};
Loader.defaultProps = {
  loading: false,
};

function Loader({ loading }) {
  return loading
    ? <ActivityIndicator style={styles.loader} size="large" color={theme.colors.primary}/>
    : null;
}

export default Loader;
