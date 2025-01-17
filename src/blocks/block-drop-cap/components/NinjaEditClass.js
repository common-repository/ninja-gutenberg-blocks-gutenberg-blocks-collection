const { __ } = wp.i18n;
const { Fragment } = wp.element;

import classnames from "classnames";
import Layout from "../layout";
import Inspector from "./Inspector";

const { AlignmentToolbar, BlockControls, RichText } = wp.editor;

const NinjaEditClass = props => {
	const {
		attributes: { dropCapText, buttonAlignment, dcFontSize, lines_of_drop },
		setAttributes
	} = props;

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value={buttonAlignment}
					onChange={buttonAlignment => setAttributes({ buttonAlignment })}
				/>
			</BlockControls>
			<Inspector {...props} />
			<Layout {...props}>
				<div style={{ paddingBottom: "55px" }}>
					<RichText
						tagName="div"
						placeholder={__("Drop Cap Text")}
						className={classnames(
							"ninja_drop_cap_text",
							"ninja-dc-font-size-" + dcFontSize,
							lines_of_drop !== undefined
								? "ninja_dc_line_of_drop_" + lines_of_drop
								: "ninja_dc_line_of_drop_"
						)}
						value={dropCapText}
						onChange={dropCapText => setAttributes({ dropCapText })}
						keepPlaceholderOnFocus
					/>
				</div>
			</Layout>
		</Fragment>
	);
};

export default NinjaEditClass;
