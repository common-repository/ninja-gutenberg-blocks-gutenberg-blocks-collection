import makeStyles from "../assets/js/makeStyles";

const NinjaDividerSave = props => {
	const {
		attributes: {
			DividerHeight,
			DividerWidth,
			DividerColor,
			DividerAlignment,
			NinjaDividerPaddingTop,
			NinjaDividerPaddingBottom
		}
	} = props;

	return (
		<div
			align={DividerAlignment}
			className="ninjaDividerUserView"
			style={makeStyles({
				paddingTop: NinjaDividerPaddingTop + "px",
				paddingBottom: NinjaDividerPaddingBottom + "px"
			})}
		>
			<div
				style={makeStyles({
					border:
						DividerColor === undefined || DividerColor === ""
							? "1px solid"
							: "1px solid " + DividerColor,
					height: DividerHeight,
					width: DividerWidth + "%",
					backgroundColor: DividerColor
				})}
			/>
		</div>
	);
};

export default NinjaDividerSave;
