import React from 'react';
import {useDispatch} from 'react-redux';
// Local
import {updateAuth} from '../../../redux/reducers/auth/auth';
import HomeView from './home.view';

/**
 *
 * @returns Main screen component
 */
export default function Main() {
  const dispatch = useDispatch();

  return <HomeView updateAuth={payload => dispatch(updateAuth(payload))} />;
}
