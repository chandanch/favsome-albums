import { configureStore } from '@reduxjs/toolkit';
import { usersReducers } from './slices/usersSlice';

const store = configureStore({
	reducer: {
		users: usersReducers,
	},
});

export { store };
