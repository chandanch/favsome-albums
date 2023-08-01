import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUsers } from '../../store';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';
import Button from '../button/Button';
import { useThunkManager } from '../../hooks/useThunkManager';

const UsersList = () => {
	const dispatch = useDispatch();
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

	if (isLoadingUser) {
		return <SkeltonLoader skeletons={4} className="h-10 w-full" />;
	}

	if (loadingUserError) {
		return <div>Error fetching users.</div>;
	}

	const addNewUser = () => {
		execAddUser();
	};

	const renderUsersList = () => {
		const usersList = data.map((user) => {
			return (
				<div className="mb2 border rounded" key={user.id}>
					<div className="flex p-2 justify-between items-center cursor-pointer">
						{user.name}
					</div>
				</div>
			);
		});
		return usersList;
	};

	return (
		<div>
			<div className="flex flex-row justify-between m-3">
				<h1 className="m-2 text-xl">Users</h1>
				{isAddingUser ? (
					'Creating User'
				) : (
					<Button onClick={addNewUser}>Add New User</Button>
				)}
				{addingUserError && 'Error Creating User'}
			</div>
			{renderUsersList()}{' '}
		</div>
	);
};

export default UsersList;
