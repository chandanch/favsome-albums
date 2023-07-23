import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUsers = createAsyncThunk('users/get', async () => {
	const response = await axios.get('http://localhost:3005/users');

	await pause(3000);

	return response.data;
});

const pause = (duration) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, duration);
	});
};

export { getUsers };
