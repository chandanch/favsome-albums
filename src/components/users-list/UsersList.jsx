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
		return <SkeltonLoader skeletons={4} />;
	}

	if (error) {
		return <div>Error fetching users.</div>;
	}

	return <div> {data.length} </div>;
};

export default UsersList;
