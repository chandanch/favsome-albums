import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { delay } from '../../utils/delay';

export const deleteUser = createAsyncThunk('users/delete', async (id) => {
	await axios.delete(`http://localhost:3005/users/${id}`);
	await delay(3000);
	return id;
});
