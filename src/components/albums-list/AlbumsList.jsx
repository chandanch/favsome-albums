import { faker } from '@faker-js/faker';

import { useAddAlbumMutation, useGetAlbumsQuery } from '../../store';
import Button from '../button/Button';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';
import AlbumListItem from '../albums-list-item/AlbumListItem';

const AlbumsList = ({ user }) => {
	const { data, error, isFetching } = useGetAlbumsQuery(user);
	const [addData, results] = useAddAlbumMutation();

	let componentContent;
	if (isFetching) {
		componentContent = (
			<SkeltonLoader skeletons={3} className="h-8 w-full" />
		);
	} else if (error) {
		componentContent = <div>Failed to fetch Albums</div>;
	} else {
		componentContent =
			data.length === 0 ? (
				<div>No Albums</div>
			) : (
				(componentContent = data.map((album) => {
					return <AlbumListItem key={album.id} album={album} />;
				}))
			);
	}

	const addAlbum = () => {
		addData({
			name: faker.commerce.productName(),
			userId: user.id,
		});
	};

	return (
		<div>
			<div className="m-2 flex flex-row items-center justify-between">
				<h3 className="text-lg font-bold">Albums of {user.name}</h3>
				<Button isLoading={results.isLoading} onClick={addAlbum}>
					+ Add Album
				</Button>
			</div>
			<div>{componentContent}</div>
		</div>
	);
};

export default AlbumsList;
