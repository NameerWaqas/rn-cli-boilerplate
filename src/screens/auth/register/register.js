import React from 'react';
import {useDispatch} from 'react-redux';
// Local
import {updateAuth} from '../../../redux/reducers/auth/auth';
import RegisterView from './register.view';

/**
 *
 * @returns Registration screen component
 */
export default function Register() {
  const dispatch = useDispatch();

  return <RegisterView updateAuth={payload => dispatch(updateAuth(payload))} />;
}
