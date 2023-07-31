import { faker } from '@faker-js/faker';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { delay } from '../../utils/delay';

const addUser = createAsyncThunk('users/add', async () => {
	const response = await axios.post('http://localhost:3005/users', {
		name: faker.person.fullName(),
	});
	await delay(3000);
	return response.data;
});

export { addUser };
