import React from 'react';
import {useDispatch} from 'react-redux';
// Login
import {updateAuth} from '../../../redux/reducers/auth/auth';
import LoginView from './login.view';

/**
 *
 * @param {Object} props
 * @param {Object} props.navigation
 * @param {Function} props.navigation.navigate
 * @returns Login screen Component
 */
export default function Login(props) {
  const dispatch = useDispatch();
  return (
    <LoginView
      {...props}
      updateAuth={payload => dispatch(updateAuth(payload))}
    />
  );
}
