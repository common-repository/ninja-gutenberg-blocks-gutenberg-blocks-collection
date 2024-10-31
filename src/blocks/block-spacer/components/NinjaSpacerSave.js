import Layout from "../layout";

const NinjaSpacerSave = props => {
	const {
		attributes: { SpacerHeight, BorderVisibility }
	} = props;

	return (
		<Layout {...props}>
			<div
				style={{
					height: SpacerHeight + "px",
					border: BorderVisibility === true ? "1px solid black" : "",
					borderStyle: BorderVisibility === true ? "dotted" : ""
				}}
			/>
		</Layout>
	);
};

export default NinjaSpacerSave;
