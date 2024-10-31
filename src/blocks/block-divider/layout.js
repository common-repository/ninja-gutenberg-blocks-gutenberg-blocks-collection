const Layout = props => {
	const {
		attributes: {
			DividerAlignment,
			NinjaDividerPaddingTop,
			NinjaDividerPaddingBottom
		},
		children
	} = props;
	return (
		<div
			className="ninja-divider-container"
			align={DividerAlignment}
			style={{
				paddingTop: NinjaDividerPaddingTop + "px",
				paddingBottom: NinjaDividerPaddingBottom + "px"
			}}
		>
			{children}
		</div>
	);
};

export default Layout;
