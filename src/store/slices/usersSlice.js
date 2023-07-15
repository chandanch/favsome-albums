import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: [],
});

const usersReducers = usersSlice.reducer;

export { usersReducers };
