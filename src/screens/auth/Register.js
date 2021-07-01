import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { updateAuth } from '../../redux/reducers/auth/auth';
import styles from './styles/Register.style';

/**
 *
 * @returns Registration screen component
 */
export default function Register() {
  const dispatch = useDispatch();

  const label = (
    <View>
      <Text style={styles.label}>Registration Screen</Text>
    </View>
  );

  const loginButton = (
    <TouchableOpacity
      onPress={() => dispatch(updateAuth(true))}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {label}
      {loginButton}
    </View>
  );
}
