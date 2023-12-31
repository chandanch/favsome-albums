import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { addUser, getUsers } from '../../store';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';
import Button from '../button/Button';
import { useThunkManager } from '../../hooks/useThunkManager';
import UsersListItem from '../users-list-item/UsersListItem';

const UsersList = () => {
	const [execgetUsers, isLoadingUser, loadingUserError] =
		useThunkManager(getUsers);

	const [execAddUser, isAddingUser, addingUserError] =
		useThunkManager(addUser);

	const { data } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		execgetUsers();
	}, [execgetUsers]);

	const addNewUser = () => {
		execAddUser();
	};

	const renderUsersList = () => {
		const usersList = data.map((user) => {
			return <UsersListItem key={user.id} user={user} />;
		});
		return usersList;
	};

	let content;
	if (isLoadingUser) {
		content = <SkeltonLoader skeletons={4} className="h-10 w-full" />;
	} else if (loadingUserError) {
		content = <div>Error fetching users.</div>;
	} else {
		content = renderUsersList();
	}

	return (
		<div>
			<div className="flex flex-row justify-between items-center m-3">
				<h1 className="m-2 text-xl">Users</h1>
				<Button onClick={addNewUser} isLoading={isAddingUser}>
					Add New User
				</Button>

				{addingUserError && 'Error Creating User'}
			</div>
			{content}
		</div>
	);
};

export default UsersList;
