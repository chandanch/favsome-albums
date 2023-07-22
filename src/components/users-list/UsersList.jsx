import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store';

const UsersList = () => {
	const dispatch = useDispatch();
	const { isLoading, data, error } = useSelector((state) => {
		return state.users;
	});

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	if (isLoading) {
		return <div>Fetching Users...</div>;
	}

	if (error) {
		return <div>Error fetching users.</div>;
	}

	return <div> {data.length} </div>;
};

export default UsersList;
