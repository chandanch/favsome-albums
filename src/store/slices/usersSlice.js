import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../thunks/getUsers';
import { addUser } from '../thunks/addUser';
import { deleteUser } from '../thunks/deleteUser';

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

		// add user reducers
		builder.addCase(addUser.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(addUser.fulfilled, (state, action) => {
			state.data.push(action.payload);
			state.isLoading = false;
		});

		builder.addCase(addUser.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});

		// delete user reducers
		builder.addCase(deleteUser.pending, (state, action) => {
			state.isLoading = true;
		});

		builder.addCase(deleteUser.fulfilled, (state, action) => {
			const users = state.data;
			const filteredUsers = users.filter(
				(user) => user.id !== action.payload
			);
			state.data = filteredUsers;

			state.isLoading = false;
		});

		builder.addCase(deleteUser.rejected, (state, action) => {
			state.error = action.error;
			state.isLoading = false;
		});
	},
});

const usersReducers = usersSlice.reducer;

export { usersReducers };
