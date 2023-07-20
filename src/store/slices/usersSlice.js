import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../thunks/getUsers';

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		isLoading: false,
		data: [],
		error: null,
	},
	extraReducers(builder) {
		builder.addCase(getUsers.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(getUsers.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
		});

		builder.addCase(getUsers.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});
	},
});

const usersReducers = usersSlice.reducer;

export { usersReducers };
