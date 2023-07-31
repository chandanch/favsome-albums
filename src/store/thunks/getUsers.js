import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { delay } from '../../utils/delay';

const getUsers = createAsyncThunk('users/get', async () => {
	const response = await axios.get('http://localhost:3005/users');

	await delay(3000);

	return response.data;
});

export { getUsers };
