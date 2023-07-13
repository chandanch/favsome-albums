import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		addData: (state, action) => {
			state.push('dd');
		},
	},
});

const usersReducers = usersSlice.reducer;

export { usersReducers };
