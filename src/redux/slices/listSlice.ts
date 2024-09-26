import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../types/User.interface';

export interface UsersListState {
  users: IUser[] | null;
}

const initialState: UsersListState = {
  users: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // updating state of users list
    saveListOfUsers: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
  },
});

export const {saveListOfUsers} = usersSlice.actions;

export default usersSlice.reducer;
