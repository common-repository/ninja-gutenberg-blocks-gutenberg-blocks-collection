import "./assets/css/editor.scss";

// Import custom components
import NinjaSpacerEdit from "./components/NinjaSpacerEdit";
import NinjaSpacerSave from "./components/NinjaSpacerSave";

// Internalization
const { __ } = wp.i18n;

// Register BlockType
const { registerBlockType } = wp.blocks;

// Block Attributes
const blockAttributes = {
	SpacerHeight: {
		type: "number",
		default: 25
	},
	BorderVisibility: {
		type: "boolean",
		default: true
	}
};

registerBlockType("ninja-blocks/ninja-block-spacer", {
	title: __("NB Spacer"),
	description: __("Add a Spacer"),
	icon: "image-flip-vertical",
	category: "ninja-blocks",
	keywords: [__("spacer"), __("ninja"), __("ninja-blocks")],
	attributes: blockAttributes,
	edit: NinjaSpacerEdit,
	save: NinjaSpacerSave
});
