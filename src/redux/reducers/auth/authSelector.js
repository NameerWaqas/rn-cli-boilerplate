import {createSelector} from 'reselect';

const isAuthenticated = state => state.auth.isAuthenticated;

export const authSelector = createSelector(isAuthenticated, state => state);
