import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUsers } from '../../store';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';
import Button from '../button/Button';

const UsersList = () => {
	const dispatch = useDispatch();
	const [isLoadingUser, setIsLoadingUser] = useState(false);
	const [loadingUserError, setLoadingUserError] = useState(false);

	const { data } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		setIsLoadingUser(true);
		dispatch(getUsers())
			.unwrap()
			.then(() => console.log('users list'));
	}, [dispatch]);

	if (isLoadingUser) {
		return <SkeltonLoader skeletons={4} className="h-10 w-full" />;
	}

	if (loadingUserError) {
		return <div>Error fetching users.</div>;
	}

	const addNewUser = () => {
		dispatch(addUser());
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
				<Button onClick={addNewUser}>Add New User</Button>
			</div>
			{renderUsersList()}{' '}
		</div>
	);
};

export default UsersList;
