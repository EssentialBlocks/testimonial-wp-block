import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const WrpBdShadow = "wrp_";
export const ImgBdShadow = "img_";
export const IMG_WIDTH = "imgWidth_";
export const IMG_GAP = "imgGap_";

export const TestimonialWrapBg = "wrp_";
export const QUOTE_SIZE = "quoteSize";
export const RATING_SIZE = "ratingSize";

export const COLUMN_NUMBERS = [
    { label: __("One", "testimonial-wp-block"), value: 1 },
    { label: __("Two", "testimonial-wp-block"), value: 2 },
    { label: __("Three", "testimonial-wp-block"), value: 3 },
];

export const DESC_POSITIONS = [
    { label: __("Top", "testimonial-wp-block"), value: 1 },
    { label: __("Bottom", "testimonial-wp-block"), value: 0 },
];

export const TEXT_ALIGN = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
];

export const ALIGN_ITEMS = [
    { label: __("Left", "testimonial-wp-block"), value: "flex-start" },
    { label: __("Center", "testimonial-wp-block"), value: "center" },
    { label: __("Right", "testimonial-wp-block"), value: "flex-end" },
];

export const UNIT_TYPES = [
    { label: __("PX", "testimonial-wp-block"), value: "px" },
    { label: __("EM", "testimonial-wp-block"), value: "em" },
];

export const ALIGN_ITEMS_VERTICAL = [
    { label: __("Top", "testimonial-wp-block"), value: "flex-start" },
    { label: __("Middle", "testimonial-wp-block"), value: "center" },
    { label: __("Bottom", "testimonial-wp-block"), value: "flex-end" },
];
export const RATING_POSITION = [
    { label: __("Top", "testimonial-wp-block"), value: 2 },
    // { label: __("Middle", "testimonial-wp-block"), value: 2 },
    { label: __("Bottom", "testimonial-wp-block"), value: 3 },
];

export const IMG_POSITIONS = [
    { label: __("Before", "testimonial-wp-block"), value: 0 },
    { label: __("After", "testimonial-wp-block"), value: 1 },
];

export const BG_TYPES = [
    { label: "Color", value: "color" },
    { label: "Image", value: "image" },
];

export const TEXT_TRANSFORM = [
    { label: __("None", "testimonial-wp-block"), value: "none" },
    { label: __("Lowercase", "testimonial-wp-block"), value: "lowercase" },
    { label: __("Capitalize", "testimonial-wp-block"), value: "capitalize" },
    { label: __("Uppercase", "testimonial-wp-block"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
    { label: __("Lighter", "testimonial-wp-block"), value: "lighter" },
    { label: __("Normal", "testimonial-wp-block"), value: "normal" },
    { label: __("Bold", "testimonial-wp-block"), value: "bold" },
    { label: __("Bolder", "testimonial-wp-block"), value: "bolder" },
];

export const TEXT_DECORATION = [
    { label: __("Initial", "testimonial-wp-block"), value: "initial" },
    { label: __("Overline", "testimonial-wp-block"), value: "overline" },
    { label: __("Line Through", "testimonial-wp-block"), value: "line-through" },
    { label: __("Underline", "testimonial-wp-block"), value: "underline" },
    {
        label: __("Underline Oveline", "testimonial-wp-block"),
        value: "underline overline",
    },
];

export const BACKGROUND_SIZE = [
    { label: __("Auto", "testimonial-wp-block"), value: "auto" },
    { label: __("Cover", "testimonial-wp-block"), value: "cover" },
    { label: __("Contain", "testimonial-wp-block"), value: "contain" },
    { label: __("Custom", "testimonial-wp-block"), value: "custom" },
];

export const BACKGROUND_REPEAT = [
    { label: __("Default", "testimonial-wp-block"), value: "" },
    { label: __("No-repeat", "testimonial-wp-block"), value: "no-repeat" },
    { label: __("Repeat", "testimonial-wp-block"), value: "repeat" },
    { label: __("Repeat-x", "testimonial-wp-block"), value: "repeat-x" },
    { label: __("Repeat-y", "testimonial-wp-block"), value: "repeat-y" },
];

export const BACKGROUND_POSITION = [
    { label: __("Default", "testimonial-wp-block"), value: "initial" },
    { label: __("Center Center", "testimonial-wp-block"), value: "center center" },
    { label: __("Center Left", "testimonial-wp-block"), value: "center left" },
    { label: __("Center Right", "testimonial-wp-block"), value: "center right" },
    { label: __("Top Center", "testimonial-wp-block"), value: "top center" },
    { label: __("Top Left", "testimonial-wp-block"), value: "top left" },
    { label: __("Top Right", "testimonial-wp-block"), value: "top right" },
    { label: __("Bottom Center", "testimonial-wp-block"), value: "bottom center" },
    { label: __("Bottom Left", "testimonial-wp-block"), value: "bottom left" },
    { label: __("Bottom Right", "testimonial-wp-block"), value: "bottom right" },
    { label: __("Custom", "testimonial-wp-block"), value: "custom" },
];

export const BACKGROUND_ATTACHMENT = [
    { label: __("Default", "testimonial-wp-block"), value: "initial" },
    { label: __("Fixed", "testimonial-wp-block"), value: "fixed" },
    { label: __("Scroll", "testimonial-wp-block"), value: "scroll" },
];

export const LAYOUT_PRESETS = [
    { label: __("Style 1", "testimonial-wp-block"), value: "layout-preset-1" },
    { label: __("Style 2", "testimonial-wp-block"), value: "layout-preset-2" },
    { label: __("Style 3", "testimonial-wp-block"), value: "layout-preset-3" },
    { label: __("Style 4 (Side Image)", "testimonial-wp-block"), value: "layout-preset-4" },
];

// Presets whose markup puts the user info after the description instead of
// beside the avatar.
export const INFO_AFTER_DESCRIPTION = ["layout-preset-3", "layout-preset-4"];

// The side-image column width also accepts percent.
export const SIDE_IMAGE_UNIT_TYPES = [
    { label: __("PX", "testimonial-wp-block"), value: "px" },
    { label: __("%", "testimonial-wp-block"), value: "%" },
];
