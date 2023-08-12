import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { delay } from '../../utils/delay';

const albumsApi = createApi({
	reducerPath: 'albums',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3005',
		fetchFn: async (...args) => {
			await delay(2000);
			return fetch(...args);
		},
	}),
	endpoints(builder) {
		return {
			getAlbums: builder.query({
				providesTags: (result, error, user) => {
					return [{ type: 'album', id: user.id }];
				},
				query: (user) => {
					return {
						url: '/albums',
						method: 'GET',
						params: {
							userId: user.id,
						},
					};
				},
			}),
			addAlbum: builder.mutation({
				invalidatesTags: (result, error, album) => {
					return [{ type: 'album', id: album.userId }];
				},
				query: (album) => {
					return {
						url: '/albums',
						method: 'POST',
						body: album,
					};
				},
			}),
		};
	},
});

export const { useGetAlbumsQuery, useAddAlbumMutation } = albumsApi;
export { albumsApi };
