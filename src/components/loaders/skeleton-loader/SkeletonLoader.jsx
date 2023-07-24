import classNames from 'classnames';

const SkeltonLoader = ({ skeletons, className }) => {
	const outerContainerStyles = classNames(
		'relative',
		'overflow-hidden',
		'bg-gray-200',
		'rounded',
		'mb-2.5',
		className
	);
	const innerContainerStyles = classNames(
		'animate-shimmer',
		'absolute',
		'inset-0',
		'-transalte-x-full',
		'bg-gradient-to-r',
		'from-gray-200',
		'via-white',
		'to-gray-200'
	);

	const boxes = Array(skeletons)
		.fill('skels')
		.map((_, i) => {
			return (
				<div key={i} className={outerContainerStyles}>
					<div className={innerContainerStyles}></div>
				</div>
			);
		});
	return boxes;
};

export default SkeltonLoader;
