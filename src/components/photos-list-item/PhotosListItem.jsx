import { GoTrash } from 'react-icons/go';
import { useDeletePhotoMutation } from '../../store';
import Button from '../button/Button';

const PhotosListItem = ({ photo }) => {
	const [deletePhoto, results] = useDeletePhotoMutation();

	const handleDeletePhoto = () => {
		deletePhoto(photo);
	};

	return (
		<div
			onClick={handleDeletePhoto}
			className="relative cursor-pointer m-2"
		>
			<img className="h-20 w-20" src={photo.url} alt="random pic" />
			<div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
				<Button isLoading={results.isLoading}>
					<GoTrash className="text-3xl" />
				</Button>
			</div>
		</div>
	);
};

export default PhotosListItem;
