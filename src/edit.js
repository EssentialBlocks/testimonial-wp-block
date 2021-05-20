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

/* Editor CSS */
import "./editor.scss";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
} from "./helpers";

import QuoteSVG from "./quoteIconSVG";

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
		shadowColor,
		shadowHOffset,
		shadowVOffset,
		shadowSpread,
		shadowBlur,
		quoteSizeUnit,
		companyColor,
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

	//Generate Margin
	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: "margin",
		styleFor: "margin",
		attributes,
	});

	//Generate Padding
	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: "padding",
		styleFor: "padding",
		attributes,
	});

	/**
	 * Assign CSS in variable for use in Markup
	*/
	const containerStyle = `
		.${blockId} {
			background-image: ${backgroundType === "image" && backgroundImageURL ? "url('" +backgroundImageURL +"')" : "none"};
			background-color: ${backgroundColor};
			background-position:
				${bgPosition === "custom"
					? bgXPos + bgXPosUnit + " " + bgYPos + bgYPosUnit
					: "unset"};
			background-size: ${bgSize === "custom" ? bgWidth + bgWidthUnit : "auto"};
			background-repeat: ${bgRepeat || "inherit"};
			background-attachment: ${bgAttachment || "unset"};
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			box-shadow: ${shadowHOffset || 0}px ${shadowVOffset || 0}px ${shadowBlur || 0}px 
					${shadowSpread || 0}px ${shadowColor || DEFAULT_SHADOW_COLOR};
		}
	`;

	const tabContainerStyle = `
		.eb-testimonial-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
		}
	`;

	const mobContainerStyle = `
		.eb-testimonial-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
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
			text-align: ${textAlign};
			justify-content: ${userInfoPos};
			align-self: ${userInfoAlign};
			margin-left: 15px;
		}
	`;

	const userNameStyle = `
		.${blockId} .eb-testimonial-username {
			${usernameTypoStylesDesktop}
			color: ${userNameColor};
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
			color: ${companyColor};
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
			color: ${descriptionColor};
			padding-right: 20;
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
		.${blockId} .eb-testimonial-quote-style svg {
			fill: ${quoteColor};
			width: ${quoteSize || DEFAULT_QUOTE_SIZE}${quoteSizeUnit};
			height: ${quoteSize || DEFAULT_QUOTE_SIZE}${quoteSizeUnit};
		}
	`;

	const desktopAllStyles = `
		${isCssExists(containerStyle) ? containerStyle : " "}
		${isCssExists(avatarContainerStyle) ? avatarContainerStyle : " "}
		${isCssExists(imageContainerStyle) ? imageContainerStyle : " "}
		${isCssExists(userInfoStyle) ? userInfoStyle : " "}
		${isCssExists(userNameStyle) ? userNameStyle : " "}
		${isCssExists(companyNameStyle) ? companyNameStyle : " "}
		${isCssExists(descriptionStyle) ? descriptionStyle : " "}
		${isCssExists(quoteStyle) ? quoteStyle : " "}
	`;

	const tabAllStyles = `
		${isCssExists(tabContainerStyle) ? tabContainerStyle : " "}
		${isCssExists(userNameStyleTab) ? userNameStyleTab : " "}
		${isCssExists(companyNameStyleTab) ? companyNameStyleTab : " "}
		${isCssExists(descriptionStyleTab) ? descriptionStyleTab : " "}
	`;

	const mobileAllStyles = `
		${isCssExists(mobContainerStyle) ? mobContainerStyle : " "}
		${isCssExists(userNameStyleMobile) ? userNameStyleMobile : " "}
		${isCssExists(companyNameStyleMobile) ? companyNameStyleMobile : " "}
		${isCssExists(descriptionStyleMobile) ? descriptionStyleMobile : " "}
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
			<div className={`eb-testimonial-wrapper ${blockId}`} data-id={blockId}>
				<div className="eb-testimonial-container">
					<div className="eb-avatar-container">
						<div
							className="image-container"
						>
							<div
								className="eb-avatar-style"
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
						<div className="eb-testimonial-quote-style">
							<QuoteSVG />
						</div>
						<RichText
							tagName="p"
							className="eb-testimonial-description"
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
