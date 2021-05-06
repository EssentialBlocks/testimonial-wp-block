import { generateTypographyAttributes } from "./helpers";

const attributes = {
	resOption: {
		type: "string",
		default: "desktop",
	},
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
	},
	avaterContainerFontSize: {
		type: "number",
		default: 16,
	},
	displayAvatar: {
		type: "boolean",
		default: true,
	},
	avatarInline: {
		type: "boolean",
		default: true,
	},
	avatarPosition: {
		type: "string",
		default: "flex-start",
	},
	avatarAlign: {
		type: "string",
		default: "center",
	},
	borderRadius: {
		type: "number",
		default: 50,
	},
	imageUrl: {
		type: "string",
	},
	imageId: {
		type: "string",
	},
	avatarOrder: {
		type: "number",
		default: 1,
	},
	userName: {
		selector: ".eb-testimonial-username",
		source: "html",
		default: "John Doe",
	},
	companyName: {
		selector: ".eb-testimonial-company",
		source: "html",
		default: "Company Name",
	},
	description: {
		selector: ".eb-testimonial-description",
		source: "html",
		default:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	textAlign: {
		type: "string",
		default: "center",
	},
	userInfoPos: {
		type: "string",
		default: "flex-start",
	},
	imagePosition: {
		type: "number",
		default: 0,
	},
	userNameColor: {
		type: "string",
		default: "#7967ff",
	},
	descriptionColor: {
		type: "string",
		default: "#4a5059",
	},
	quoteColor: {
		type: "string",
		default: "#edf1f7",
	},
	quoteSize: {
		type: "number",
		default: 60,
	},
	userInfoAlign: {
		type: "string",
		default: "center",
	},
	backgroundColor: {
		type: "string",
		default: "transparent",
	},
	backgroundImageURL: {
		type: "string",
	},
	//Margin
	linkedMargin: {
		type: "boolean",
		default: false,
	},
	marginTop: {
		type: "number",
		default: 10,
	},
	marginRight: {
		type: "number",
		default: 10,
	},
	marginBottom: {
		type: "number",
		default: 10,
	},
	marginLeft: {
		type: "number",
		default: 10,
	},
	//Margin Tab
	tabMarginTop: {
		type: "number",
		default: 10,
	},
	tabMarginRight: {
		type: "number",
		default: 10,
	},
	tabMarginBottom: {
		type: "number",
		default: 10,
	},
	tabMarginLeft: {
		type: "number",
		default: 10,
	},
	//Margin Mobile
	mobMarginTop: {
		type: "number",
		default: 10,
	},
	mobMarginRight: {
		type: "number",
		default: 10,
	},
	mobMarginBottom: {
		type: "number",
		default: 10,
	},
	mobMarginLeft: {
		type: "number",
		default: 10,
	},
	//Padding
	linkedPadding: {
		type: "boolean",
		default: false,
	},
	paddingTop: {
		type: "number",
		default: 10,
	},
	paddingRight: {
		type: "number",
		default: 10,
	},
	paddingBottom: {
		type: "number",
		default: 10,
	},
	paddingLeft: {
		type: "number",
		default: 10,
	},
	//Padding Tab
	tabPaddingTop: {
		type: "number",
		default: 10,
	},
	tabPaddingRight: {
		type: "number",
		default: 10,
	},
	tabPaddingBottom: {
		type: "number",
		default: 10,
	},
	tabPaddingLeft: {
		type: "number",
		default: 10,
	},
	//Padding Mobile
	mobPaddingTop: {
		type: "number",
		default: 10,
	},
	mobPaddingRight: {
		type: "number",
		default: 10,
	},
	mobPaddingBottom: {
		type: "number",
		default: 10,
	},
	mobPaddingLeft: {
		type: "number",
		default: 10,
	},

	shadowColor: {
		type: "string",
		default: "#000000",
	},
	shadowHOffset: {
		type: "number",
	},
	shadowVOffset: {
		type: "number",
	},
	shadowBlur: {
		type: "number",
	},
	shadowSpread: {
		type: "number",
	},
	marginUnit: {
		type: "string",
		default: "px",
	},
	tabMarginUnit: {
		type: "string",
		default: "px",
	},
	mobMarginUnit: {
		type: "string",
		default: "px",
	},
	paddingUnit: {
		type: "string",
		default: "px",
	},
	tabPaddingUnit: {
		type: "string",
		default: "px",
	},
	mobPaddingUnit: {
		type: "string",
		default: "px",
	},
	nameSizeUnit: {
		type: "string",
		default: "px",
	},
	companySizeUnit: {
		type: "string",
		default: "px",
	},
	descriptionSizeUnit: {
		type: "string",
		default: "px",
	},
	quoteSizeUnit: {
		type: "string",
		default: "px",
	},
	companyColor: {
		type: "string",
		default: "#4a5059",
	},
	backgroundType: {
		type: "string",
		default: "color",
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values({username: 'username', company: 'company', description: 'description'})),
	// nameFontFamily: {
	// 	type: "string",
	// },
	// nameFontWeight: {
	// 	type: "string",
	// 	default: "normal",
	// },
	// nameFontSize: {
	// 	type: "number",
	// },
	// nameFontSizeUnit: {
	// 	type: "string",
	// 	default: "string",
	// },
	// nameTextTransform: {
	// 	type: "string",
	// },
	// nameTextDecoration: {
	// 	type: "string",
	// },
	// nameLetterSpacing: {
	// 	type: "number",
	// },
	// nameLetterSpacingUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// nameLineHeight: {
	// 	type: "number",
	// },
	// nameLineHeightUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// companyFontFamily: {
	// 	type: "string",
	// },
	// companyFontWeight: {
	// 	type: "string",
	// 	default: "normal",
	// },
	// companyFontSizeUnit: {
	// 	type: "string",
	// 	default: "string",
	// },
	// companyTextTransform: {
	// 	type: "string",
	// },
	// companyTextDecoration: {
	// 	type: "string",
	// },
	// companyLetterSpacing: {
	// 	type: "number",
	// },
	// companyLetterSpacingUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// companyLineHeight: {
	// 	type: "number",
	// },
	// companyLineHeightUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// descriptionFontFamily: {
	// 	type: "string",
	// },
	// descriptionFontWeight: {
	// 	type: "string",
	// 	default: "normal",
	// },
	// descriptionFontSizeUnit: {
	// 	type: "string",
	// 	default: "string",
	// },
	// descriptionTextTransform: {
	// 	type: "string",
	// },
	// descriptionTextDecoration: {
	// 	type: "string",
	// },
	// descriptionLetterSpacing: {
	// 	type: "number",
	// },
	// descriptionLetterSpacingUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	// descriptionLineHeight: {
	// 	type: "number",
	// },
	// descriptionLineHeightUnit: {
	// 	type: "string",
	// 	default: "px",
	// },
	bgPositon: {
		type: "string",
	},
	bgXPos: {
		type: "number",
		default: 0,
	},
	bgXPosUnit: {
		type: "string",
		default: "%",
	},
	bgYPos: {
		type: "number",
		default: 0,
	},
	bgYPosUnit: {
		type: "string",
		default: "%",
	},
	bgSize: {
		type: "string",
	},
	bgWidth: {
		type: "number",
	},
	bgWidthUnit: {
		type: "string",
		default: "%",
	},
	bgRepeat: {
		type: "string",
	},
	bgAttachment: {
		type: "string",
	},
};

export default attributes;
