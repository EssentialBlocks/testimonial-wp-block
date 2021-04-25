import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";
import attributes from "./attributes";

registerBlockType("testimonial-wp-block/testimonial", {
	title: __("Testimonial", "block"),
	description: __("Display testimonials & gain instant credibility", "block"),
	category: "widgets",
	icon,
	attributes,
	edit: Edit,
	save,
});