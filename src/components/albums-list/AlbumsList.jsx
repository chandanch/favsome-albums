import { useGetAlbumsQuery } from '../../store';

const AlbumsList = ({ user }) => {
	const { data, error, isLoading } = useGetAlbumsQuery(user);

	console.log(data, error, isLoading);

	return (
		<div>
			{' '}
			Albums of {user.name} {data.length === 0 ? 'No Albums' : ''}{' '}
		</div>
	);
};

export default AlbumsList;
