import "./assets/css/style.scss";
import "./assets/css/editor.scss";

// Import custom components
import NinjaEditClass from "./components/NinjaEditClass";
import NinjaSaveClass from "./components/NinjaSaveClass";

// Internalization
const { __ } = wp.i18n;

// Register block
const { registerBlockType } = wp.blocks;

registerBlockType("ninja-blocks/ninja-block-call-to-action", {
	title: __("NB Call To Action"),
	description: __(
		"Add a call to action section with a title, text, and a button."
	),
	icon: "megaphone",
	category: "ninja-blocks",
	keywords: [__("call to action"), __("cta"), __("ninja")],
	attributes: {
		btnTxt: {
			type: "string"
		},
		buttonUrl: {
			type: "string",
			source: "attribute",
			selector: "a",
			attribute: "href"
		},
		buttonAlignment: {
			type: "string",
			default: "center"
		},
		buttonBackgroundColor: {
			type: "string",
			default: ""
		},
		btnTextColor: {
			type: "string",
			default: "#FFFFFF"
		},
		buttonSize: {
			type: "string",
			default: "14px"
		},
		btnShape: {
			type: "string",
			default: "0px"
		},
		buttonTarget: {
			type: "boolean",
			default: false
		},
		ctaTitle: {
			type: "array",
			selector: ".ninja-cta-title",
			source: "children"
		},
		ctaTitleFontSize: {
			type: "number"
		},
		ctaTextFontSize: {
			type: "number"
		},
		ctaText: {
			type: "array",
			selector: ".ninja-cta-text",
			source: "children"
		},
		ctaBackgroundColor: {
			type: "string",
			default: ""
		},
		ctaTitleColor: {
			type: "string",
			default: ""
		},
		ctaTextColor: {
			type: "string",
			default: ""
		}
	},
	edit: NinjaEditClass,
	save: NinjaSaveClass
});
