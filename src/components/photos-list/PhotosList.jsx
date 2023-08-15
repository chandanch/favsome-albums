import {
	useAddAlbumMutation,
	useAddPhotoMutation,
	useGetPhotosQuery,
} from '../../store';
import Button from '../button/Button';
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
		</div>
	);
};

export default PhotosList;
