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
		selector: ".username-one",
		source: "html",
		default: "John Doe",
	},
	companyName: {
		selector: ".company-one",
		source: "html",
		default: "Company Name",
	},
	description: {
		selector: ".description-one",
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
	},
	descriptionColor: {
		type: "string",
	},
	quoteColor: {
		type: "string",
	},
	userNameFontSize: {
		type: "number",
	},
	companyFontSize: {
		type: "number",
	},
	descriptionFontSize: {
		type: "number",
	},
	quoteSize: {
		type: "number",
	},
	userInfoAlign: {
		type: "string",
		default: "center",
	},
	backgroundColor: {
		type: "string",
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
	},
	marginRight: {
		type: "number",
	},
	marginBottom: {
		type: "number",
	},
	marginLeft: {
		type: "number",
	},
	//Margin Tab
	tabMarginTop: {
		type: "number",
	},
	tabMarginRight: {
		type: "number",
	},
	tabMarginBottom: {
		type: "number",
	},
	tabMarginLeft: {
		type: "number",
	},
	//Margin Mobile
	mobMarginTop: {
		type: "number",
	},
	mobMarginRight: {
		type: "number",
	},
	mobMarginBottom: {
		type: "number",
	},
	mobMarginLeft: {
		type: "number",
	},
	//Padding
	linkedPadding: {
		type: "boolean",
		default: false,
	},
	paddingTop: {
		type: "number",
	},
	paddingRight: {
		type: "number",
	},
	paddingBottom: {
		type: "number",
	},
	paddingLeft: {
		type: "number",
	},
	//Padding Tab
	tabPaddingTop: {
		type: "number",
	},
	tabPaddingRight: {
		type: "number",
	},
	tabPaddingBottom: {
		type: "number",
	},
	tabPaddingLeft: {
		type: "number",
	},
	//Padding Mobile
	mobPaddingTop: {
		type: "number",
	},
	mobPaddingRight: {
		type: "number",
	},
	mobPaddingBottom: {
		type: "number",
	},
	mobPaddingLeft: {
		type: "number",
	},

	shadowColor: {
		type: "string",
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
	},
	backgroundType: {
		type: "string",
		default: "color",
	},
	nameFontFamily: {
		type: "string",
	},
	nameFontWeight: {
		type: "string",
		default: "normal",
	},
	nameFontSize: {
		type: "number",
	},
	nameFontSizeUnit: {
		type: "string",
		default: "string",
	},
	nameTextTransform: {
		type: "string",
	},
	nameTextDecoration: {
		type: "string",
	},
	nameLetterSpacing: {
		type: "number",
	},
	nameLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	nameLineHeight: {
		type: "number",
	},
	nameLineHeightUnit: {
		type: "string",
		default: "px",
	},
	companyFontFamily: {
		type: "string",
	},
	companyFontWeight: {
		type: "string",
		default: "normal",
	},
	companyFontSizeUnit: {
		type: "string",
		default: "string",
	},
	companyTextTransform: {
		type: "string",
	},
	companyTextDecoration: {
		type: "string",
	},
	companyLetterSpacing: {
		type: "number",
	},
	companyLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	companyLineHeight: {
		type: "number",
	},
	companyLineHeightUnit: {
		type: "string",
		default: "px",
	},
	descriptionFontFamily: {
		type: "string",
	},
	descriptionFontWeight: {
		type: "string",
		default: "normal",
	},
	descriptionFontSizeUnit: {
		type: "string",
		default: "string",
	},
	descriptionTextTransform: {
		type: "string",
	},
	descriptionTextDecoration: {
		type: "string",
	},
	descriptionLetterSpacing: {
		type: "number",
	},
	descriptionLetterSpacingUnit: {
		type: "string",
		default: "px",
	},
	descriptionLineHeight: {
		type: "number",
	},
	descriptionLineHeightUnit: {
		type: "string",
		default: "px",
	},
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
