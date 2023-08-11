import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const albumsApi = createApi({
	reducerPath: 'albums',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3005',
	}),
	endpoints(builder) {
		return {
			getAlbums: builder.query({
				providesTags: ['album'],
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
				invalidatesTags: ['album'],
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
