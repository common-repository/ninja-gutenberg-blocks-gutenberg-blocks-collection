import classnames from "classnames";
import Layout from "../layout";
import makeStyles from "../assets/js/makeStyles";

const { RichText } = wp.editor;

const NinjaSaveClass = props => {
	const {
		btnTxt,
		buttonUrl,
		buttonBackgroundColor,
		btnTextColor,
		buttonSize,
		btnShape,
		buttonTarget,
		buttonAlignment,
		ctaText,
		ctaTextFontSize,
		ctaTextColor
	} = props.attributes;
	return (
		<Layout {...props}>
			<div className="ninja-cta">
				<div className="ninja-text-cta">
					<RichText.Content
						tagName="p"
						value={ctaText}
						className="ninja-cta-text"
						style={makeStyles({
							color: ctaTextColor,
							fontSize:
								ctaTextFontSize === "" || ctaTextFontSize === undefined
									? ""
									: ctaTextFontSize + "px",
							textAlign: buttonAlignment
						})}
					/>
				</div>
				<div className="ninja-cta-button">
					<a href={buttonUrl} target={buttonTarget ? "_blank" : "_self"}>
						<div
							className="ninja-btn"
							style={makeStyles({
								borderRadius: btnShape,
								backgroundColor: buttonBackgroundColor
							})}
						>
							<RichText.Content
								tagName="p"
								value={btnTxt}
								className={classnames("ninja-button")}
								style={makeStyles({
									color: btnTextColor,
									fontSize:
										buttonSize === "" || buttonSize === undefined
											? ""
											: buttonSize
								})}
							/>
						</div>
					</a>
				</div>
			</div>
		</Layout>
	);
};

export default NinjaSaveClass;
