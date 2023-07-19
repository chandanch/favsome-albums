import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		isLoading: false,
		data: [],
		error: null,
	},
});

const usersReducers = usersSlice.reducer;

export { usersReducers };
