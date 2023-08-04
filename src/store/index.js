import { configureStore } from '@reduxjs/toolkit';
import { usersReducers } from './slices/usersSlice';
import { getUsers } from './thunks/getUsers';
import { addUser } from './thunks/addUser';
import { deleteUser } from './thunks/deleteUser';

const store = configureStore({
	reducer: {
		users: usersReducers,
	},
});

export { store, getUsers, addUser, deleteUser };
