import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUsers = createAsyncThunk('users/get', async () => {
	const response = await axios.get('http://localhost:3005/users');
	return response.data;
});

export { getUsers };
