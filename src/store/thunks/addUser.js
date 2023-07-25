const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: axios } = require('axios');

const addUser = createAsyncThunk('users/add', async (payload) => {
	const response = await axios.post('http://localhost:3005/users', payload);
	return response.data;
});

export { addUser };
