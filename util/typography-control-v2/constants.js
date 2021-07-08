const { __ } = wp.i18n;

export const FONTS = {
  "Abril Fatface": { weight: ["400"] },
  Anton: { weight: ["400"] },
  Arvo: { weight: ["400", "700"] },
  Asap: { weight: ["400", "500", "600", "700"] },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  },
  "Cormorant Garamond": { weight: ["300", "400", "500", "600", "700"] },
  Faustina: { weight: ["400", "500", "600", "700"] },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"],
  },
  Inconsolata: { weight: ["400", "700"] },
  Heebo: { weight: ["100", "300", "400", "500", "700", "800", "900"] },
  Karla: { weight: ["400", "700"] },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  },
  Lora: { weight: ["400", "700"] },
  Merriweather: { weight: ["300", "400", "500", "600", "700", "800", "900"] },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  },
  "Noto Sans": { weight: ["400", "700"] },
  "Noto Serif": { weight: ["400", "700"] },
  "Open Sans": { weight: ["300", "400", "500", "600", "700", "800"] },
  Oswald: { weight: ["200", "300", "400", "500", "600", "700"] },
  "Playfair Display": { weight: ["400", "700", "900"] },
  "PT Serif": { weight: ["400", "700"] },
  Roboto: { weight: ["100", "300", "400", "500", "700", "900"] },
  Rubik: { weight: ["300", "400", "500", "700", "900"] },
  Tajawal: { weight: ["200", "300", "400", "500", "700", "800", "900"] },
  Ubuntu: { weight: ["300", "400", "500", "700"] },
  Yrsa: { weight: ["300", "400", "500", "600", "700"] },
};

export const sizeUnitTypes = [
  { label: "px", value: "px" },
  { label: "%", value: "%" },
  { label: "em", value: "em" },
];

export const optionsFontWeights = [
  { label: __("Default"), value: "" },
  { label: __("100"), value: "100" },
  { label: __("200"), value: "200" },
  { label: __("300"), value: "300" },
  { label: __("400"), value: "400" },
  { label: __("500"), value: "500" },
  { label: __("600"), value: "600" },
  { label: __("700"), value: "700" },
  { label: __("800"), value: "800" },
  { label: __("900"), value: "900" },
];

export const optionsTextTransforms = [
  { label: __("Default"), value: "" },
  { label: __("None"), value: "none" },
  { label: __("Lowercase"), value: "lowercase" },
  { label: __("Capitalize"), value: "capitalize" },
  { label: __("Uppercase"), value: "uppercase" },
];

export const optionsTextDecorations = [
  { label: __("Default"), value: "" },
  { label: __("None"), value: "initial" },
  { label: __("Overline"), value: "overline" },
  { label: __("Line Through"), value: "line-through" },
  { label: __("Underline"), value: "underline" },
  {
    label: __("Underline Oveline"),
    value: "underline overline",
  },
];

export const optionsLhLsp = [
  { label: "px", value: "px" },
  { label: "em", value: "em" },
];
