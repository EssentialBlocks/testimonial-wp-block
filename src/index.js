const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";
import Example from "./example";

registerBlockType("testimonial-wp-block/testimonial", {
	title: __("Testimonial", "block"),
	description: __("Display testimonials & gain instant credibility", "block"),
	category: "widgets",
	keywords: [
		__("testimonial", "testimonial"),
		__("quote", "testimonial"),
	],
	icon,
	attributes,
	edit: Edit,
	save,
	example: Example,
});