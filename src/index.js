import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./style.scss";

import Edit from "./edit";
import save from "./save";
import icon from "./icon";

registerBlockType("block/testimonial", {
	title: __("Testimonial", "block"),
	description: __("", "block"),
	category: "widgets",
	icon,
	edit: Edit,
	save,
});
