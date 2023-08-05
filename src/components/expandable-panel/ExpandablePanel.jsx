const ExpandablePanel = ({ header, children }) => {
	return (
		<div className="mb2 border rounded">
			<div className="flex p-2 justify-between items-center cursor-pointer">
				<div className="flex flex-row items-center justify-center">
					{header}
				</div>
			</div>
			<div className="p2 border-t">{children}</div>
		</div>
	);
};

export default ExpandablePanel;
