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
    },
    editUser: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        firstName: string;
        lastName: string;
      }>
    ) => {
      state.users = state.users.map((user) =>
        user.id === action.payload.id
          ? {
              ...user,
              username: action.payload.username,
              firstName: action.payload.firstName,
              lastName: action.payload.lastName
            }
          : user
      );
    }
  }
});

export const { editUser, addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
