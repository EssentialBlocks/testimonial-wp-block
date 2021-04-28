/**
 * Import React Features
*/
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { MediaUpload } = wp.blockEditor;
const { Button } = wp.components;

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import {
	DEFAULT_BACKGROUND,
	DEFAULT_SHADOW_COLOR,
	DEFAULT_NAME_SIZE,
	DEFAULT_NAME_COLOR,
	DEFAULT_COMPANY_SIZE,
	DEFAULT_DESCRIPTION_SIZE,
	DEFAULT_DESCRIPTION_COLOR,
	DEFAULT_QUOTE_SIZE,
	DEFAULT_QUOTE_COLOR,
	DEFAULT_COMPANY_COLOR,
} from "./constants";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
} from "./helpers";

const Edit = (props) => {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		resOption,
		blockId,
		blockMeta,
		avaterContainerFontSize,
		displayAvatar,
		avatarInline,
		avatarPosition,
		avatarAlign,
		borderRadius,
		avatarOrder,
		imageId,
		imageUrl,
		userName,
		companyName,
		description,
		userInfoAlign,
		textAlign,
		userInfoPos,
		imagePosition,
		userNameColor,
		descriptionColor,
		quoteColor,
		quoteSize,
		backgroundType,
		backgroundColor,
		backgroundImageURL,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		tabMarginTop,
		tabMarginRight,
		tabMarginBottom,
		tabMarginLeft,
		mobMarginTop,
		mobMarginRight,
		mobMarginBottom,
		mobMarginLeft,
		marginUnit,
		tabMarginUnit,
		mobMarginUnit,
		paddingTop,
		paddingRight,
		paddingBottom,
		paddingLeft,
		tabPaddingTop,
		tabPaddingRight,
		tabPaddingBottom,
		tabPaddingLeft,
		mobPaddingTop,
		mobPaddingRight,
		mobPaddingBottom,
		mobPaddingLeft,
		paddingUnit,
		tabPaddingUnit,
		mobPaddingUnit,
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowSpread,
		shadowBlur,
		quoteSizeUnit,
		companyColor,
		nameFontFamily,
		nameFontSize,
		nameSizeUnit,
		nameFontWeight,
		nameTextTransform,
		nameTextDecoration,
		nameLetterSpacing,
		nameLetterSpacingUnit,
		nameLineHeight,
		nameLineHeightUnit,
		companyFontFamily,
		companyFontSize,
		companySizeUnit,
		companyFontWeight,
		companyTextTransform,
		companyTextDecoration,
		companyLetterSpacing,
		companyLetterSpacingUnit,
		companyLineHeight,
		companyLineHeightUnit,
		descriptionFontFamily,
		descriptionFontSize,
		descriptionSizeUnit,
		descriptionFontWeight,
		descriptionTextTransform,
		descriptionTextDecoration,
		descriptionLetterSpacing,
		descriptionLetterSpacingUnit,
		descriptionLineHeight,
		descriptionLineHeightUnit,
		bgPosition,
		bgXPos,
		bgXPosUnit,
		bgYPos,
		bgYPosUnit,
		bgSize,
		bgWidth,
		bgWidthUnit,
		bgRepeat,
		bgAttachment,
	} = attributes;

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		// const current_block_id = attributes.blockId;

		const BLOCK_PREFIX = "eb-testimonial";
		const unique_id =
			BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);

		/**
		 * Define and Generate Unique Block ID
		 */
		if (!blockId) {
			setAttributes({ blockId: unique_id });
		}

		/**
		 * Assign New Unique ID when duplicate BlockId found
		 * Mostly happens when User Duplicate a Block
		 */
		const all_blocks = wp.data.select("core/block-editor").getBlocks();

		let duplicateFound = false;
		const fixDuplicateBlockId = (blocks) => {
			if (duplicateFound) return;
			for (const item of blocks) {
				const { innerBlocks } = item;
				if (Object.keys(innerBlocks).length === 0 && item.attributes.blockId === blockId) {
					if (item.clientId !== clientId) {
						setAttributes({ blockId: unique_id });
						console.log("found a duplicate");
						duplicateFound = true;
						return;
					} else if (innerBlocks.length > 0) {
						fixDuplicateBlockId(innerBlocks);
					}
				} else if (innerBlocks.length > 0) {
					fixDuplicateBlockId(innerBlocks);
				}
			}
		};

		fixDuplicateBlockId(all_blocks);
	}, []);


	//Generate Author Typography
	const {
		typoStylesDesktop: usernameTypoStylesDesktop,
		typoStylesTab: usernameTypoStylesTab,
		typoStylesMobile: usernameTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: 'username',
	});

	//Generate Comapny Typography
	const {
		typoStylesDesktop: companyTypoStylesDesktop,
		typoStylesTab: companyTypoStylesTab,
		typoStylesMobile: companyTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: 'company',
	});

	//Generate Description Typography
	const {
		typoStylesDesktop: descriptionTypoStylesDesktop,
		typoStylesTab: descriptionTypoStylesTab,
		typoStylesMobile: descriptionTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: 'description',
	});

	/**
	 * Assign CSS in variable for use in Markup
	*/
	const containerStyle = `
		.eb-testimonial-wrapper.${blockId} {
			background-image: ${backgroundType === "image" && backgroundImageURL ? "url('" +backgroundImageURL +"')" : "none"};
			background-color: ${backgroundColor || DEFAULT_BACKGROUND};
			background-position:
				${bgPosition === "custom"
					? bgXPos + bgXPosUnit + " " + bgYPos + bgYPosUnit
					: ""};
			background-size: ${bgSize === "custom" ? bgWidth + bgWidthUnit : bgSize};
			background-repeat: ${bgRepeat || "none"};
			background-attachment: ${bgAttachment};
			margin: ${marginTop || 10}${marginUnit}  ${marginRight || 10}${marginUnit} 
			${marginBottom || 10}${marginUnit} ${marginLeft || 10}${marginUnit};
			padding: ${paddingTop || 10}${paddingUnit}  ${paddingRight || 10}${paddingUnit} 
					${paddingBottom || 10}${paddingUnit} ${paddingLeft || 10}${paddingUnit};
			box-shadow: ${shadowHOffset || 0}px ${shadowVOffset || 0}px ${shadowBlur || 0}px 
					${shadowSpread || 0}px ${shadowColor || DEFAULT_SHADOW_COLOR};
		}
	`;

	const tabContainerStyle = `
		.eb-testimonial-wrapper.${blockId} {
			margin: ${tabMarginTop || 10}${tabMarginUnit}  ${tabMarginRight || 10}${tabMarginUnit} 
			${tabMarginBottom || 10}${tabMarginUnit} ${tabMarginLeft || 10}${tabMarginUnit};
			padding: ${tabPaddingTop || 10}${tabPaddingUnit}  ${tabPaddingRight || 10}${tabPaddingUnit} 
					${tabPaddingBottom || 10}${tabPaddingUnit} ${tabPaddingLeft || 10}${tabPaddingUnit};
		}
	`;

	const mobContainerStyle = `
		.eb-testimonial-wrapper.${blockId} {
			margin: ${mobMarginTop || 10}${mobMarginUnit}  ${mobMarginRight || 10}${mobMarginUnit} 
			${mobMarginBottom || 10}${mobMarginUnit} ${mobMarginLeft || 10}${mobMarginUnit};
			padding: ${mobPaddingTop || 10}${mobPaddingUnit}  ${mobPaddingRight || 10}${mobPaddingUnit} 
					${mobPaddingBottom || 10}${mobPaddingUnit} ${mobPaddingLeft || 10}${mobPaddingUnit};
		}
	`;

	const avatarContainerStyle = `
		.${blockId} .eb-avatar-container {
			order: ${avatarOrder};
			justify-content: ${avatarPosition};
			align-items: ${avatarAlign};
			font-size: ${avaterContainerFontSize}px;
			flex-direction: ${avatarInline ? "row" : "column"};
		}
	`;

	const imageContainerStyle = `
		.${blockId} .image-container {
			order: ${imagePosition};
			display: ${displayAvatar ? "block" : "none"};
		}
		.${blockId} .eb-avatar-style {
			background-image: url(${imageUrl});
			border-radius: ${borderRadius}%;
			display: ${imageUrl ? "block" : "none"};
		}
	`;

	const userInfoStyle = `
		.${blockId} .eb-userinfo-container {
			textAlign: ${textAlign};
			justifyContent: ${userInfoPos};
			alignSelf: ${userInfoAlign};
		}
	`;

	const userNameStyle = `
		.${blockId} .eb-testimonial-username {
			${usernameTypoStylesDesktop}
			color: ${userNameColor || DEFAULT_NAME_COLOR};
		}
	`;

	const userNameStyleTab = `
		.${blockId} .eb-testimonial-username {
			${usernameTypoStylesTab}
		}
	`;

	const userNameStyleMobile = `
		.${blockId} .eb-testimonial-username {
			${usernameTypoStylesMobile}
		}
	`;

	const companyNameStyle = `
		.${blockId} .eb-testimonial-company { 
			${companyTypoStylesDesktop}
			color: ${companyColor || DEFAULT_COMPANY_COLOR};
		}
	`;
	const companyNameStyleTab = `
		.${blockId} .eb-testimonial-company { 
			${companyTypoStylesTab}
		}
	`;
	const companyNameStyleMobile = `
		.${blockId} .eb-testimonial-company { 
			${companyTypoStylesMobile}
		}
	`;

	const descriptionStyle = `
		.${blockId} .eb-description-container p {
			${descriptionTypoStylesDesktop}
			color: ${descriptionColor || DEFAULT_DESCRIPTION_COLOR};
			paddingRight: 20;
		}
	`;
	const descriptionStyleTab = `
		.${blockId} .eb-description-container p { 
			${descriptionTypoStylesTab}
		}
	`;
	const descriptionStyleMobile = `
		.${blockId} .eb-description-container p { 
			${descriptionTypoStylesMobile}
		}
	`;

	const quoteStyle = `
		.${blockId} .eb-testimonial-quote-style {
			color: ${quoteColor || DEFAULT_QUOTE_COLOR};
			fontSize: ${quoteSize || DEFAULT_QUOTE_SIZE}${quoteSizeUnit};
		}
	`;

	const desktopAllStyles = `
		${containerStyle}
		${avatarContainerStyle}
		${imageContainerStyle}
		${userInfoStyle}
		${userNameStyle}
		${companyNameStyle}
		${descriptionStyle}
		${quoteStyle}
	`;

	const tabAllStyles = `
		${tabContainerStyle}
		${userNameStyleTab}
		${companyNameStyleTab}
		${descriptionStyleTab}
	`;

	const mobileAllStyles = `
		${mobContainerStyle}
		${userNameStyleMobile}
		${companyNameStyleMobile}
		${descriptionStyleMobile}
	`;

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	return [
		isSelected && <Inspector {...props} />,
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>
			// Edit view here
			<div className={`"eb-testimonial-wrapper ${blockId}"`} data-id={blockId}>
				<div className="eb-testimonial-container">
					<div className="eb-avatar-container">
						<div
							className="image-container"
						>
							<div
								className="eb-avatar-style"
								// style={{
								// 	backgroundImage: `url(${imageUrl})`,
								// 	borderRadius: `${borderRadius}%`,
								// 	display: imageUrl ? "block" : "none",
								// }}
							/>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										imageUrl: media.url,
										imageId: media.id,
									})
								}
								type="image"
								value={imageId}
								render={({ open }) =>
									!imageUrl && (
										<Button
											className="eb-testimonial-image components-button"
											label={__("Upload Image")}
											icon="format-image"
											onClick={open}
										/>
									)
								}
							/>
						</div>

						<div className="eb-userinfo-container">
							<RichText
								tagName="p"
								className="eb-testimonial-username"
								value={userName}
								onChange={(newName) => setAttributes({ userName: newName })}
							/>

							<RichText
								tagName="p"
								className="eb-testimonial-company"
								value={companyName}
								onChange={(newName) => setAttributes({ companyName: newName })}
							/>
						</div>
					</div>

					<div className="eb-description-container">
						<div
							className="fas fa-quote-left eb-testimonial-quote-style"
						/>
						<RichText
							tagName="p"
							value={description}
							onChange={(newText) => setAttributes({ description: newText })}
						/>
					</div>
				</div>
			</div>
		</div>,
	];
};

export default Edit;
