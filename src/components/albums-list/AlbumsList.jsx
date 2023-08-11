import { faker } from '@faker-js/faker';

import { useAddAlbumMutation, useGetAlbumsQuery } from '../../store';
import Button from '../button/Button';
import ExpandablePanel from '../expandable-panel/ExpandablePanel';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';

const AlbumsList = ({ user }) => {
	const { data, error, isLoading } = useGetAlbumsQuery(user);
	const [addData, results] = useAddAlbumMutation();

	let componentContent;
	if (isLoading) {
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
					const header = <div>{album.name}</div>;
					return (
						<ExpandablePanel header={header} key={album.id}>
							List of Photos!
						</ExpandablePanel>
					);
				}))
			);
	}

	const addAlbum = () => {
		addData({
			name: faker.commerce.productName(),
			userId: user.id,
		});
		console.log(results);
	};

	return (
		<div>
			<Button onClick={addAlbum}> + Add Album</Button>
			<h2>Albums of {user.name}</h2>
			<div>{componentContent}</div>
		</div>
	);
};

export default AlbumsList;
