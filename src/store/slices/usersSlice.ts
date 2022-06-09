import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { users } from '../../data/users';

export type UserRoleType = 'admin' | 'user';

export type UserType = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  role: UserRoleType;
  enabled: boolean;
};

type InitialStateType = {
  users: UserType[];
};

const initialState: InitialStateType = {
  users: [...users]
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<{ newUser: UserType }>) => {
      state.users.push(action.payload.newUser);
    },
    deleteUser: (state, action: PayloadAction<{ id: string }>) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    }
  }
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
