import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store';
import SkeltonLoader from '../loaders/skeleton-loader/SkeletonLoader';

const UsersList = () => {
	const dispatch = useDispatch();
	const { isLoading, data, error } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	if (isLoading) {
		return <SkeltonLoader skeletons={4} className="h-10 w-full" />;
	}

	if (error) {
		return <div>Error fetching users.</div>;
	}

	const renderUsersList = () => {
		const usersList = data.map((user) => {
			return (
				<div className="mb2 border rounded">
					<div className="flex p-2 justify-between items-center cursor-pointer">
						{user.name}
					</div>
				</div>
			);
		});
		return usersList;
	};

	return <div> {renderUsersList()} </div>;
};

export default UsersList;
