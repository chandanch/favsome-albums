import { configureStore } from '@reduxjs/toolkit';
import { usersReducers } from './slices/usersSlice';
import { getUsers } from './thunks/getUsers';

const store = configureStore({
	reducer: {
		users: usersReducers,
	},
});

export { store, getUsers };
