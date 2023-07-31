import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUsers } from '../../store';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';
import Button from '../button/Button';

const UsersList = () => {
	const dispatch = useDispatch();
	const [isLoadingUser, setIsLoadingUser] = useState(false);
	const [loadingUserError, setLoadingUserError] = useState(null);

	const [isCreatingUser, setIsCreatingUser] = useState(false);
	const [creatingUserError, setCreatingUserError] = useState(null);

	const { data } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		setIsLoadingUser(true);
		dispatch(getUsers())
			.unwrap()
			.catch((err) => setLoadingUserError(err))
			.finally(() => setIsLoadingUser(false));
	}, [dispatch]);

	if (isLoadingUser) {
		return <SkeltonLoader skeletons={4} className="h-10 w-full" />;
	}

	if (loadingUserError) {
		return <div>Error fetching users.</div>;
	}

	const addNewUser = () => {
		setIsCreatingUser(true);
		dispatch(addUser())
			.unwrap()
			.catch((err) => setCreatingUserError(err))
			.finally(() => setIsCreatingUser(false));
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
				{isCreatingUser ? (
					'Creating User'
				) : (
					<Button onClick={addNewUser}>Add New User</Button>
				)}
				{creatingUserError && 'Error Creating User'}
			</div>
			{renderUsersList()}{' '}
		</div>
	);
};

export default UsersList;
