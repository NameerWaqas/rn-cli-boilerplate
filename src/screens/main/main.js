import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { updateAuth } from '../../redux/reducers/auth/auth';
import styles from './styles/main.style';

/**
 *
 * @returns Main screen component
 */
export default function Main() {
  const dispatch = useDispatch();
  const label = (
    <View>
      <Text style={styles.label}>Main Screen</Text>
    </View>
  );
  const logoutButton = (
    <TouchableOpacity
      onPress={() => dispatch(updateAuth(false))}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {label}
      {logoutButton}
    </View>
  );
}
