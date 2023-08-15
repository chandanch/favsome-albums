import { GoTrash } from 'react-icons/go';
import { useThunkManager } from '../../hooks/useThunkManager';
import { deleteUser } from '../../store';
import Button from '../button/Button';
import ExpandablePanel from '../expandable-panel/ExpandablePanel';
import AlbumsList from '../albums-list/AlbumsList';

const UsersListItem = ({ user }) => {
	const [execDeleteUser, isLoading, error] = useThunkManager(deleteUser);

	const handleDelete = () => {
		execDeleteUser(user.id);
	};

	const header = (
		<>
			{error && <div>Error in deleting user</div>}
			<Button
				className="mr-3"
				isLoading={isLoading}
				onClick={handleDelete}
			>
				<GoTrash />
			</Button>
			<h2 className="font-bold" style={{ color: 'green' }}>
				{user.name}
			</h2>
		</>
	);

	return (
		<ExpandablePanel header={header}>
			<AlbumsList user={user} />
		</ExpandablePanel>
	);
};

export default UsersListItem;
