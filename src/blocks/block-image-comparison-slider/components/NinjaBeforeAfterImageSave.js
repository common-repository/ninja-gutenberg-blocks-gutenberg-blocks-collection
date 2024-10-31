import Layout from "../layout";
import makeStyles from "../assets/js/makeStyles";

const { Fragment } = wp.element;

const NinjaBeforeAfterImageSave = props => {
	const {
		attributes: {
			BeforeImageUrl,
			BeforeImageAlt,
			BeforeImageFilter,
			BeforeImageFilterPerc,
			AfterImageUrl,
			AfterImageAlt
		}
	} = props;
	return (
		<Layout {...props}>
			<div className="img_area">
				<div
					id="ninja_image_comparison_container"
					className="ninja_image_comparison_container"
					style={{ display: "flex", width: "100%" }}
				>
					{BeforeImageUrl && AfterImageUrl && (
						<Fragment>
							<div className="ninja_before_image">
								<img
									src={BeforeImageUrl}
									alt={BeforeImageAlt}
									style={makeStyles({
										width: "100%",
										objectFit: "cover",
										filter:
											BeforeImageFilter === "" ||
											BeforeImageFilter === undefined
												? ""
												: BeforeImageFilter + "(" + BeforeImageFilterPerc + "%)"
									})}
									className="ninja_before_img_comparison"
								/>
							</div>
							<div className="ninja_after_image">
								<img
									src={AfterImageUrl}
									alt={AfterImageAlt}
									className="ninja_after_img_comparison"
									style={{ width: "100%", objectFit: "cover" }}
								/>
							</div>
						</Fragment>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default NinjaBeforeAfterImageSave;
