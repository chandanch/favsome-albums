const SkeltonLoader = ({ skeletons }) => {
	const boxes = Array(skeletons)
		.fill('skels')
		.map((_, i) => {
			return <div key={i}>Loading...</div>;
		});
	return boxes;
};

export default SkeltonLoader;
