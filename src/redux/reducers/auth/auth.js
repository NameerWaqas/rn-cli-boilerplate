import { createSlice } from '@reduxjs/toolkit';

const initState = {
  isAuthenticated: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    updateAuth: (state, action) => {
      // eslint-disable-next-line
      state.isAuthenticated = action.payload;
    },
  },
});

export const { updateAuth } = authReducer.actions;
export default authReducer;
