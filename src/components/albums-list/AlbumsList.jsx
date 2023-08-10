import { useGetAlbumsQuery } from '../../store';

const AlbumsList = ({ user }) => {
	const { data, error, isLoading, isFetching } = useGetAlbumsQuery(user);

	console.log(data, error, isLoading, isFetching);

	return (
		<div>
			{' '}
			Albums of {user.name} {data.length === 0 ? 'No Albums' : ''}{' '}
		</div>
	);
};

export default AlbumsList;
