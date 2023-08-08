import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { usersReducers } from './slices/usersSlice';
import { getUsers } from './thunks/getUsers';
import { addUser } from './thunks/addUser';
import { deleteUser } from './thunks/deleteUser';
import { albumsApi } from './apis/albumsApi';
import { useGetAlbumsQuery } from './apis/albumsApi';

const store = configureStore({
	reducer: {
		users: usersReducers,
		[albumsApi.reducerPath]: albumsApi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(albumsApi.middleware);
	},
});

setupListeners(store.dispatch);

export { store, getUsers, addUser, deleteUser, useGetAlbumsQuery };
