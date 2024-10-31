import "./assets/css/style.scss";

// Import custom components
import NinjaBeforeAfterImageEdit from "./components/NinjaBeforeAfterImageEdit";
import NinjaBeforeAfterImageSave from "./components/NinjaBeforeAfterImageSave";

// Internalization
const { __ } = wp.i18n;

// Register BlockType
const { registerBlockType } = wp.blocks;

// Block attributes
const blockAttributes = {
	BeforeImageUrl: {
		type: "string",
		source: "attribute",
		attribute: "src",
		selector: ".ninja_before_img_comparison"
	},
	BeforeImageId: {
		type: "number"
	},
	BeforeImageAlt: {
		type: "string",
		source: "attribute",
		attribute: "alt",
		selector: ".ninja_before_img_comparison"
	},
	BeforeImageFilter: {
		type: "string"
	},
	BeforeImageFilterPerc: {
		type: "number",
		default: 100
	},
	AfterImageUrl: {
		type: "string",
		source: "attribute",
		attribute: "src",
		selector: ".ninja_after_img_comparison"
	},
	AfterImageId: {
		type: "number"
	},
	AfterImageAlt: {
		type: "string",
		source: "attribute",
		attribute: "alt",
		selector: ".ninja_after_img_comparison"
	}
};

registerBlockType("ninja-blocks/ninja-before-and-after-image", {
	title: __("NB Image Comparison Slider"),
	description: __("Compare two images, as before and after"),
	icon: "format-image",
	category: "ninja-blocks",
	keywords: [__("before and after image comparison"), __("image"), __("ninja")],
	attributes: blockAttributes,
	edit: NinjaBeforeAfterImageEdit,
	save: NinjaBeforeAfterImageSave
});
