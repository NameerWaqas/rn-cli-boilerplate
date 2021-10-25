import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Local
import styles from './home.style';

/**
 *
 * @returns Main screen component
 */
export default function HomeView({updateAuth}) {
  const label = (
    <View>
      <Text style={styles.label}>Main Screen</Text>
    </View>
  );
  const logoutButton = (
    <TouchableOpacity onPress={() => updateAuth(false)} style={styles.button}>
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
