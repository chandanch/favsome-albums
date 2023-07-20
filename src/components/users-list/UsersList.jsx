import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../store';

const UsersList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return <div>UsersList</div>;
};

export default UsersList;
