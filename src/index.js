import { __ } from "@wordpress/i18n";

import "./style.scss";

import Edit from "./edit";
import Save from "./save";
import { TestimonialIcon } from "./icon";
import attributes from "./attributes";
import metadata from "../block.json";
import Example from "./example";
const { ebConditionalRegisterBlockType } = EBControls;

ebConditionalRegisterBlockType(metadata, {
	icon: TestimonialIcon,
	attributes,
	keywords: [
		__("testimonial", "testimonial-wp-block"),
		__("about", "testimonial-wp-block"),
		__("eb quote", "testimonial-wp-block"),
	],
	edit: Edit,
	save: Save,
	example: Example,
});