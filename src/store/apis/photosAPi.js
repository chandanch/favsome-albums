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
				providesTags: (result, error, album) => {
					const tags = [];
					result.forEach((photo) => {
						tags.push({ type: 'photos', id: photo.id });
					});
					tags.push({ type: 'albumphotos', id: album.id });
					return tags;
				},
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
				invalidatesTags: (result, error, photo) => {
					return [{ type: 'albumphotos', id: photo.albumId }];
				},
				query: (photo) => {
					return {
						url: '/photos',
						method: 'POST',
						body: photo,
					};
				},
			}),
			deletePhoto: builder.mutation({
				invalidatesTags: (result, error, photo) => {
					return [{ type: 'photos', id: photo.id }];
				},
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
