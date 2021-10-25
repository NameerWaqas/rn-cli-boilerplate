import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Local
import styles from './register.style';

/**
 *
 * @returns Registration screen component
 */
export default function RegisterView({updateAuth}) {
  const label = (
    <View>
      <Text style={styles.label}>Registration Screen</Text>
    </View>
  );

  const loginButton = (
    <TouchableOpacity onPress={() => updateAuth(true)} style={styles.button}>
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
