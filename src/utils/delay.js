export const delay = (duration) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, duration);
	});
};
