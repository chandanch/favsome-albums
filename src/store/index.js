import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { usersReducers } from './slices/usersSlice';
import { getUsers } from './thunks/getUsers';
import { addUser } from './thunks/addUser';
import { deleteUser } from './thunks/deleteUser';
import { albumsApi } from './apis/albumsApi';
import {
	useGetAlbumsQuery,
	useAddAlbumMutation,
	useDeleteAlbumMutation,
} from './apis/albumsApi';
import { photosAPi } from './apis/photosAPi';
import {
	useAddPhotoMutation,
	useDeletePhotoMutation,
	useGetPhotosQuery,
} from './apis/photosAPi';

const store = configureStore({
	reducer: {
		users: usersReducers,
		[albumsApi.reducerPath]: albumsApi.reducer,
		[photosAPi.reducerPath]: photosAPi.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware()
			.concat(albumsApi.middleware)
			.concat(photosAPi.middleware);
	},
});

setupListeners(store.dispatch);

export {
	store,
	getUsers,
	addUser,
	deleteUser,
	useGetAlbumsQuery,
	useAddAlbumMutation,
	useDeleteAlbumMutation,
	useAddPhotoMutation,
	useGetPhotosQuery,
	useDeletePhotoMutation,
};
