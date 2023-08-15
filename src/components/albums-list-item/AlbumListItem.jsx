import { GoTrash } from 'react-icons/go';

import Button from '../button/Button';
import ExpandablePanel from '../expandable-panel/ExpandablePanel';
import { useDeleteAlbumMutation } from '../../store';
import PhotosList from '../photos-list/PhotosList';

const AlbumListItem = ({ album }) => {
	const [deleteAlbum, result] = useDeleteAlbumMutation();

	const deleteAlbumItem = () => {
		//TODO: Delete album
		deleteAlbum(album);
	};

	const header = (
		<>
			<Button
				className="mr-3"
				isLoading={result.isLoading}
				onClick={deleteAlbumItem}
			>
				<GoTrash />
			</Button>
			{album.name}
		</>
	);
	return (
		<ExpandablePanel header={header} key={album.id}>
			<PhotosList album={album} />
		</ExpandablePanel>
	);
};

export default AlbumListItem;
