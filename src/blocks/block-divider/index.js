// Import custom components
import NinjaDividerEdit from "./components/NinjaDividerEdit";
import NinjaDividerSave from "./components/NinjaDividerSave";

// Internalization
const { __ } = wp.i18n;

// RegisterBlockType
const { registerBlockType } = wp.blocks;

// Attributes for the Block
const blockAttributes = {
	DividerHeight: {
		type: "number",
		default: 1
	},
	DividerWidth: {
		type: "number",
		default: 50
	},
	DividerAlignment: {
		type: "string",
		default: "left"
	},
	DividerColor: {
		type: "string",
		default: "#000000"
	},
	NinjaDividerPaddingTop: {
		type: "number",
		default: 10
	},
	NinjaDividerPaddingBottom: {
		type: "number",
		default: 10
	}
};

registerBlockType("ninja-blocks/ninja-block-divider", {
	title: __("NB Divider"),
	description: __("Add a Divider"),
	icon: "minus",
	category: "ninja-blocks",
	keywords: [__("divider"), __("ninja"), __("ninja-blocks")],
	attributes: blockAttributes,
	edit: NinjaDividerEdit,
	save: NinjaDividerSave
});
