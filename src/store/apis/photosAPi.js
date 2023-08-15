import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { delay } from '../../utils/delay';

const photosAPi = createApi({
	reducerPath: 'photos',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3005',
		fetchFn: async (...args) => {
			await delay(2000);
			return fetch(...args);
		},
	}),
	endpoints(builder) {
		return {
			getPhotos: builder.query({
				query: (album) => {
					return {
						url: '/photos',
						method: 'GET',
						params: {
							albumId: album.id,
						},
					};
				},
			}),
			addPhoto: builder.mutation({
				query: (photo) => {
					return {
						url: '/photos',
						method: 'POST',
						body: photo,
					};
				},
			}),
			deletePhoto: builder.mutation({
				query: (photo) => {
					return {
						url: `/photos/${photo.id}`,
						method: 'DELETE',
					};
				},
			}),
		};
	},
});

export { photosAPi };

export const {
	useGetPhotosQuery,
	useAddPhotoMutation,
	useDeletePhotoMutation,
} = photosAPi;
