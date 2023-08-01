import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useThunkManager = (thunk) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const dispatch = useDispatch();

	const executeThunk = useCallback(
		(arg) => {
			setIsLoading(true);
			dispatch(thunk(arg))
				.unwrap()
				.catch((err) => setError(err))
				.finally(() => setIsLoading(false));
		},
		[dispatch, thunk]
	);

	return [executeThunk, isLoading, error];
};
