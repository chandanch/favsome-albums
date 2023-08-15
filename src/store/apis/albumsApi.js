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
					const tags = result.map((album) => {
						return { type: 'album', id: album.id };
					});
					tags.push({ type: 'userAlbums', id: user.id });

					return tags;
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
					return [{ type: 'userAlbums', id: album.userId }];
				},
				query: (album) => {
					return {
						url: '/albums',
						method: 'POST',
						body: album,
					};
				},
			}),
			deleteAlbum: builder.mutation({
				invalidatesTags: (result, error, album) => {
					return [{ type: 'album', id: album.id }];
				},
				query: (album) => {
					return {
						url: `/albums/${album.id}`,
						method: 'DELETE',
					};
				},
			}),
		};
	},
});

export const {
	useGetAlbumsQuery,
	useAddAlbumMutation,
	useDeleteAlbumMutation,
} = albumsApi;
export { albumsApi };
