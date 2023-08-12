import ExpandablePanel from '../expandable-panel/ExpandablePanel';

const AlbumListItem = ({ album }) => {
	const header = <div>{album.name}</div>;
	return (
		<ExpandablePanel header={header} key={album.id}>
			List of Photos!
		</ExpandablePanel>
	);
};

export default AlbumListItem;
