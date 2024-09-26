import {configureStore} from '@reduxjs/toolkit';
import usersReducer from './slices/listSlice';

export const store = configureStore({
  reducer: {
    usersList: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
