import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
// Local
import styles from './login.style';

/**
 *
 * @param {Object} props
 * @param {Object} props.navigation
 * @param {Function} props.navigation.navigate
 * @returns Login screen Component
 */
export default function LoginView({navigation, updateAuth}) {
  const label = (
    <View>
      <Text style={styles.label}>Login Screen</Text>
    </View>
  );

  const loginButton = (
    <TouchableOpacity onPress={() => updateAuth(true)} style={styles.button}>
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

LoginView.propTypes = {
  navigation: PropTypes.shape({navigate: PropTypes.func}).isRequired,
};
