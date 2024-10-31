import "./assets/css/editor.scss";
import "./assets/css/style.scss";

// Import custom components
import NinjaEditClass from "./components/NinjaEditClass";
import NinjaSaveClass from "./components/NinjaSaveClass";

// Internationalization
const { __ } = wp.i18n;

// Registering block
const { registerBlockType } = wp.blocks;

const blockAttributes = {
	dropCapText: {
		type: "array",
		selector: ".ninja_drop_cap_text",
		source: "children"
	},
	drop_cap_position: {
		type: "string",
		default: "dropped"
	},
	dcFontSize: {
		type: "number",
		default: 1
	},
	dcTextColor: {
		type: "string",
		default: ""
	},
	buttonAlignment: {
		type: "string",
		default: "left"
	}
};

registerBlockType("ninja-blocks/ninja-block-drop-cap", {
	title: __("NB Drop Cap"),
	description: __("Add a DropCap, put your text on to the block!"),
	icon: "format-quote",
	category: "ninja-blocks",
	keywords: [__("ninja drop cap"), __("drop cap"), __("ninja")],
	attributes: blockAttributes,
	edit: NinjaEditClass,
	save: NinjaSaveClass
});
