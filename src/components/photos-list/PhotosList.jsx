import PhotosListItem from '../photos-list-item/PhotosListItem';

const PhotosList = ({ album }) => {
	return (
		<div>
			Photos List for {album.name}
			<PhotosListItem />
		</div>
	);
};

export default PhotosList;
