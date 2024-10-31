/**
 * Block: Ninja Block Button
 */

// import block dependency Components
import Inspector from "./components/inspector.js";

// import makeStyle compoent
import makeStyle from "./components/makeStyle.js";

//  Import CSS
import "./styles/style.scss";
import "./styles/editor.scss";

// Internationalization
const { __ } = wp.i18n;

// Register Block
const { registerBlockType } = wp.blocks;

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const {
	RichText,
	URLInput,
	BlockControls,
	//AlignmentToolbar,
	BlockAlignmentToolbar
} = wp.editor;

const { Dashicon, IconButton, Button } = wp.components;

class NBButtonBlock extends Component {
	render() {
		const {
			attributes: {
				buttonText,
				buttonUrl,
				borderRadius,
				buttonSize,
				buttonBackground,
				borderColor,
				hoverColor,
				buttonTextColor,
				buttonTarget,
				buttonAlignment
			},
			setAttributes,
			isSelected,
			className
		} = this.props;

		const editStyle = makeStyle({
			backgroundColor: buttonBackground,
			borderRadius: borderRadius + "px",
			border: borderColor ? `solid 3px ${borderColor}` : undefined
		});
		return [
			<Inspector {...{ setAttributes, ...this.props }} />,

			<Fragment>
				<BlockControls>
					<BlockAlignmentToolbar
						value={buttonAlignment}
						onChange={value => setAttributes({ buttonAlignment: value })}
					/>
				</BlockControls>
			</Fragment>,

			<div
				className={`NinjaButton NinjaButton-${buttonAlignment}`}
				style={editStyle}
			>
				<RichText
					tagName="p"
					value={buttonText}
					className="nb_button"
					onChange={value => setAttributes({ buttonText: value })}
					placeholder={__("Button Text...")}
					keepPlaceholderOnFocus
					formattingControls={[]}
					style={{ color: buttonTextColor, fontSize: buttonSize }}
				/>
			</div>,

			isSelected && (
				<form
					key="form-link"
					className="nb_button_url_link"
					onSubmit={event => event.preventDefault()}
				>
					<span class="dashicons dashicons-admin-links linkIcon" />
					<URLInput
						className="button-url"
						value={buttonUrl}
						onChange={value => setAttributes({ buttonUrl: value })}
					/>
					<IconButton
						icon="editor-break"
						label={__("Apply")}
						type="submit"
						className="nb-apply-iconbutton"
					/>
				</form>
			)
		];
	}
}

registerBlockType("ninja-blocks/nb-button", {
	title: __("NB Button"),
	description: __("Add a Button"),
	icon: "admin-links",
	category: "ninja-blocks",
	keywords: [__("button"), __("input button"), __("custom button")],

	attributes: {
		buttonText: {
			type: "string",
			selector: ".nb_button"
		},
		buttonUrl: {
			type: "string",
			source: "attribute",
			selector: "a",
			attribute: "href"
		},
		borderRadius: {
			type: "number"
		},
		buttonSize: {
			type: "string"
		},
		buttonBackground: {
			type: "string"
		},
		borderColor: {
			type: "string"
		},
		hoverColor: {
			type: "string"
		},
		buttonTextColor: {
			type: "string"
		},
		buttonTarget: {
			type: "boolean",
			default: false
		},
		buttonAlignment: {
			type: "string",
			default: "center"
		}
	},

	edit: NBButtonBlock,

	save({ attributes }) {
		const {
			buttonText,
			buttonUrl,
			borderRadius,
			buttonSize,
			buttonBackground,
			borderColor,
			hoverColor,
			buttonTextColor,
			buttonTarget,
			buttonAlignment
		} = attributes;

		const buttonStyle = makeStyle({
			backgroundColor: buttonBackground,
			borderRadius: borderRadius + "px",
			border: borderColor ? `solid 3px ${borderColor}` : undefined
		});

		return (
			<div>
				{buttonText && (
					<div
						className={`NinjaButton NinjaButton-${buttonAlignment}`}
						style={buttonStyle}
						onMouseOver={`style.backgroundColor='${hoverColor}'`}
						onMouseOut={`style.backgroundColor='${buttonBackground}'`}
					>
						<a href={buttonUrl} target={buttonTarget ? "_blank" : "_self"}>
							<RichText.Content
								tagName="p"
								value={buttonText}
								className="nb_button"
								style={{ color: buttonTextColor, fontSize: buttonSize }}
							/>
						</a>
					</div>
				)}
			</div>
		);
	}
});
