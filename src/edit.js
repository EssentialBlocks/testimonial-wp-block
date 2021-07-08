/**
 * Import React Features
 */
 const { useBlockProps, RichText } = wp.blockEditor;
 const { useEffect } = wp.element;
 
 /**
  * WordPress dependencies
  */
 const { __ } = wp.i18n;
 const { MediaUpload } = wp.blockEditor;
 const { Button } = wp.components;
 
 const { select } = wp.data;
 
 /**
  * Internal dependencies
  */
 import "./editor.scss";
 import Inspector from "./inspector";
 import {
	 softMinifyCssStrings,
	 isCssExists,
	 generateBackgroundControlStyles,
	 generateDimensionsControlStyles,
	 generateTypographyStyles,
	 generateBorderShadowStyles,
	 mimmikCssForPreviewBtnClick,
	 duplicateBlockIdFix,
 } from "../util/helpers";
 import { WrpBdShadow, TestimonialWrapBg } from "./constants";
 
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
 
	 // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	 useEffect(() => {
		 setAttributes({
			 resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		 });
	 }, []);
 
	 // this useEffect is for creating a unique id for each block's unique className by a random unique number
	 useEffect(() => {
		 const BLOCK_PREFIX = "eb-testimonial";
		 duplicateBlockIdFix({
			 BLOCK_PREFIX,
			 blockId,
			 setAttributes,
			 select,
			 clientId,
		 });
	 }, []);
 
	 // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	 useEffect(() => {
		 mimmikCssForPreviewBtnClick({
			 domObj: document,
			 select,
		 });
	 }, []);
 
	 //Generate Author Typography
	 const {
		 typoStylesDesktop: usernameTypoStylesDesktop,
		 typoStylesTab: usernameTypoStylesTab,
		 typoStylesMobile: usernameTypoStylesMobile,
	 } = generateTypographyStyles({
		 attributes,
		 prefixConstant: "username",
	 });
 
	 //Generate Comapny Typography
	 const {
		 typoStylesDesktop: companyTypoStylesDesktop,
		 typoStylesTab: companyTypoStylesTab,
		 typoStylesMobile: companyTypoStylesMobile,
	 } = generateTypographyStyles({
		 attributes,
		 prefixConstant: "company",
	 });
 
	 //Generate Description Typography
	 const {
		 typoStylesDesktop: descriptionTypoStylesDesktop,
		 typoStylesTab: descriptionTypoStylesTab,
		 typoStylesMobile: descriptionTypoStylesMobile,
	 } = generateTypographyStyles({
		 attributes,
		 prefixConstant: "description",
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
 
	 //Generate Border Shadow
	 const {
		 styesDesktop: bdShadowStyesDesktop,
		 styesTab: bdShadowStyesTab,
		 styesMobile: bdShadowStyesMobile,
		 stylesHoverDesktop: bdShadowStylesHoverDesktop,
		 stylesHoverTab: bdShadowStylesHoverTab,
		 stylesHoverMobile: bdShadowStylesHoverMobile,
	 } = generateBorderShadowStyles({
		 controlName: WrpBdShadow,
		 attributes,
		 // noShadow: true,
		 // noBorder: true,
	 });
 
	 //Generate Background
	 const {
		 backgroundStylesDesktop,
		 hoverBackgroundStylesDesktop,
		 backgroundStylesTab,
		 hoverBackgroundStylesTab,
		 backgroundStylesMobile,
		 hoverBackgroundStylesMobile,
		 overlayStylesDesktop,
		 hoverOverlayStylesDesktop,
		 overlayStylesTab,
		 hoverOverlayStylesTab,
		 overlayStylesMobile,
		 hoverOverlayStylesMobile,
	 } = generateBackgroundControlStyles({
		 attributes,
		 controlName: TestimonialWrapBg,
	 });
 
	 /**
	  * Assign CSS in variable for use in Markup
	  */
	 const containerStyle = `
		 .eb-testimonial-wrapper.${blockId} {
			 ${backgroundStylesDesktop}
			 ${wrapperMarginStylesDesktop}
			 ${wrapperPaddingStylesDesktop}
			 ${bdShadowStyesDesktop}
		 }
 
		 .eb-testimonial-wrapper.${blockId}:hover{		
			 ${hoverBackgroundStylesDesktop}
			 ${bdShadowStylesHoverDesktop}
		 }
		 
		 .eb-testimonial-wrapper.${blockId}:before{
			 ${overlayStylesDesktop}
		 }
		 
		 .eb-testimonial-wrapper.${blockId}:hover:before{
			 ${hoverOverlayStylesDesktop}
		 }
	 `;
 
	 const tabContainerStyle = `
		 .eb-testimonial-wrapper.${blockId} {
			 ${wrapperMarginStylesTab}
			 ${wrapperPaddingStylesTab}
			 ${bdShadowStyesTab}
			 ${backgroundStylesTab}
		 }
		 
		 .eb-testimonial-wrapper.${blockId}:hover{		
			 ${hoverBackgroundStylesTab}
			 ${bdShadowStylesHoverTab}
		 }
		 
		 .eb-testimonial-wrapper.${blockId}:before{
			 ${overlayStylesTab}
		 }
		 
		 .eb-testimonial-wrapper.${blockId}:hover:before{
			 ${hoverOverlayStylesTab}
		 }
	 `;
 
	 const mobContainerStyle = `
		 .eb-testimonial-wrapper.${blockId} {
			 ${wrapperMarginStylesMobile}
			 ${wrapperPaddingStylesMobile}
			 ${bdShadowStyesMobile}
			 ${backgroundStylesMobile}
		 }
 
		 .eb-testimonial-wrapper.${blockId}:hover{		
			 ${hoverBackgroundStylesMobile}
			 ${bdShadowStylesHoverMobile}
		 }
		 
		 .eb-testimonial-wrapper.${blockId}:before{
			 ${overlayStylesMobile}
		 }
		 
		 .eb-testimonial-wrapper.${blockId}:hover:before{
			 ${hoverOverlayStylesMobile}
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
			 padding-right: 20px;
			 word-break: break-word;
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
		 .${blockId} .eb-testimonial-quote-style:before {
			 content: none;
		 }
		 .${blockId} .eb-testimonial-quote-style svg {
			 fill: ${quoteColor};
			 width: ${quoteSize}${quoteSizeUnit};
			 height: ${quoteSize}${quoteSizeUnit};
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
 
				 ${resOption === "Tablet" ? tabAllStyles : " "}
				 ${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}
 
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
						 <div className="image-container">
							 <div className="eb-avatar-style" />
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
 