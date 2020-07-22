const { __ } = wp.i18n;

export const DEFAULT_BACKGROUND = "transparent";
export const DEFAULT_NAME_COLOR = "#7967ff";
export const DEFAULT_NAME_SIZE = "20";
export const DEFAULT_DESCRIPTION_COLOR = "#4a5059";
export const DEFAULT_DESCRIPTION_SIZE = "18";
export const DEFAULT_COMPANY_COLOR = "#4a5059";
export const DEFAULT_COMPANY_SIZE = "14";
export const DEFAULT_QUOTE_COLOR = "#edf1f7";
export const DEFAULT_QUOTE_SIZE = "48";
export const DEFAULT_SHADOW_COLOR = "#000000";

export const COLUMN_NUMBERS = [
	{ label: __("One"), value: 1 },
	{ label: __("Two"), value: 2 },
	{ label: __("Three"), value: 3 },
];

export const DESC_POSITIONS = [
	{ label: __("Top"), value: 1 },
	{ label: __("Bottom"), value: 0 },
];

export const TEXT_ALIGN = [
	{ label: "Left", value: "left" },
	{ label: "Center", value: "center" },
	{ label: "Right", value: "right" },
];

export const ALIGN_ITEMS = [
	{ label: __("Start"), value: "flex-start" },
	{ label: __("Center"), value: "center" },
	{ label: __("End"), value: "flex-end" },
];

export const IMG_POSITIONS = [
	{ label: __("Before"), value: 0 },
	{ label: __("After"), value: 1 },
];

export const BG_TYPES = [
	{ label: "Color", value: "color" },
	{ label: "Image", value: "image" },
];

export const TEXT_TRANSFORM = [
	{ label: __("None"), value: "none" },
	{ label: __("Lowercase"), value: "lowercase" },
	{ label: __("Capitalize"), value: "capitalize" },
	{ label: __("Uppercase"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
	{ label: __("Lighter"), value: "lighter" },
	{ label: __("Normal"), value: "normal" },
	{ label: __("Bold"), value: "bold" },
	{ label: __("Bolder"), value: "bolder" },
];

export const TEXT_DECORATION = [
	{ label: __("Initial"), value: "initial" },
	{ label: __("Overline"), value: "overline" },
	{ label: __("Line Through"), value: "line-through" },
	{ label: __("Underline"), value: "underline" },
	{ label: __("Underline Oveline"), value: "underline overline" },
];

export const BACKGROUND_SIZE = [
	{ label: __("Auto"), value: "auto" },
	{ label: __("Cover"), value: "cover" },
	{ label: __("Contain"), value: "contain" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_REPEAT = [
	{ label: __("Default"), value: "" },
	{ label: __("No-repeat"), value: "no-repeat" },
	{ label: __("Repeat"), value: "repeat" },
	{ label: __("Repeat-x"), value: "repeat-x" },
	{ label: __("Repeat-y"), value: "repeat-y" },
];

export const BACKGROUND_POSITION = [
	{ label: __("Default"), value: "initial" },
	{ label: __("Center Center"), value: "center center" },
	{ label: __("Center Left"), value: "center left" },
	{ label: __("Center Right"), value: "center right" },
	{ label: __("Top Center"), value: "top center" },
	{ label: __("Top Left"), value: "top left" },
	{ label: __("Top Right"), value: "top right" },
	{ label: __("Bottom Center"), value: "bottom center" },
	{ label: __("Bottom Left"), value: "bottom left" },
	{ label: __("Bottom Right"), value: "bottom right" },
	{ label: __("Custom"), value: "custom" },
];

export const BACKGROUND_ATTACHMENT = [
	{ label: __("Default"), value: "initial" },
	{ label: __("Fixed"), value: "fixed" },
	{ label: __("Scroll"), value: "scroll" },
];
