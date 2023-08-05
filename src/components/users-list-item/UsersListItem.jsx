import { GoTrash } from 'react-icons/go';
import { useThunkManager } from '../../hooks/useThunkManager';
import { deleteUser } from '../../store';
import Button from '../button/Button';

const UsersListItem = ({ user }) => {
	const [execDeleteUser, isLoading, error] = useThunkManager(deleteUser);

	const handleDelete = () => {
		execDeleteUser(user.id);
	};

	return (
		<div className="mb2 border rounded">
			<div className="flex p-2 justify-between items-center cursor-pointer">
				<div className="flex flex-row items-center justify-center">
					{error && <div>Error in deleting user</div>}
					<Button
						className="mr-3"
						isLoading={isLoading}
						onClick={handleDelete}
					>
						<GoTrash />
					</Button>
					{user.name}
				</div>
			</div>
		</div>
	);
};

export default UsersListItem;
