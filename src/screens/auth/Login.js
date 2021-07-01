import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { updateAuth } from '../../redux/reducers/auth/auth';
import styles from './styles/Login.style';

/**
 *
 * @param {Object} props
 * @param {Object} props.navigation
 * @param {Function} props.navigation.navigate
 * @returns Login screen Component
 */
export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const label = (
    <View>
      <Text style={styles.label}>Login Screen</Text>
    </View>
  );

  const loginButton = (
    <TouchableOpacity
      onPress={() => dispatch(updateAuth(true))}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );

  const toRegister = (
    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
      <Text>Don&apos;t have account?</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {label}
      {loginButton}
      {toRegister}
    </View>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};
