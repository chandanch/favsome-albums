import {
	useAddAlbumMutation,
	useAddPhotoMutation,
	useGetPhotosQuery,
} from '../../store';
import Button from '../button/Button';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';
import PhotosListItem from '../photos-list-item/PhotosListItem';
import { faker } from '@faker-js/faker';

const PhotosList = ({ album }) => {
	const { data, error, isFetching } = useGetPhotosQuery(album);
	const [addPhoto, results] = useAddPhotoMutation();

	const addNewPhoto = () => {
		addPhoto({
			albumId: album.id,
			url: faker.image.urlLoremFlickr({
				category: 'abstract',
				width: 150,
				height: 100,
			}),
		});
	};

	let content;
	if (isFetching) {
		content = <SkeltonLoader className="h-8 w-full" skeletons={4} />;
	} else if (error) {
		content = <>Error in Fetching Photos</>;
	} else {
		content = data.map((photo) => {
			return <PhotosListItem key={photo.id} photo={photo} />;
		});
	}

	return (
		<div>
			<div className="m-2 flex flex-row items-center justify-between">
				<h3 className="text-md font-bold" style={{ color: '#218675' }}>
					Photos of {album.name}
				</h3>
				<Button isLoading={results.isLoading} onClick={addNewPhoto}>
					+ Add Photo
				</Button>
			</div>
			<div className="mx-8 flex flex-row flex-wrap justify-center">
				{content}
			</div>
		</div>
	);
};

export default PhotosList;
