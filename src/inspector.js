/**
 * WordPress dependencies
 */
/**
 * WordPress dependencies
 */
 const { __ } = wp.i18n;
 const { InspectorControls, PanelColorSettings } = wp.blockEditor;
 const {
	 PanelBody,
	 ToggleControl,
	 RangeControl,
	 Button,
	 BaseControl,
	 ButtonGroup,
	 TabPanel,
 } = wp.components;
 
 const { select } = wp.data;
 
 const { useEffect } = wp.element;
 const { MediaUpload } = wp.blockEditor;
 
 /**
  * Internal dependencies
  */
 
 import {
	 mimmikCssForResBtns,
	 mimmikCssOnPreviewBtnClickWhileBlockSelected,
 } from "../util/helpers";
 
 import ImageAvatar from "../util/image-avatar";
 import {
	 DESC_POSITIONS,
	 TEXT_ALIGN,
	 ALIGN_ITEMS,
	 ALIGN_ITEMS_VERTICAL,
	 IMG_POSITIONS,
	 WrpBdShadow,
	 TestimonialWrapBg,
 } from "./constants";
 import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
 import TypographyDropdown from "../util/typography-control-v2";
 import ToggleButton from "../util/toggle-button";
 import BorderShadowControl from "../util/border-shadow-control";
 import BackgroundControl from "../util/background-control";
 
 function Inspector(props) {
	 const { attributes, setAttributes } = props;
	 const {
		 resOption,
		 displayAvatar,
		 avatarInline,
		 avatarPosition,
		 avatarAlign,
		 borderRadius,
		 avatarOrder,
		 imageUrl,
		 userInfoAlign,
		 textAlign,
		 userNameColor,
		 descriptionColor,
		 quoteColor,
		 companyColor,
	 } = attributes;
 
	 // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	 useEffect(() => {
		 setAttributes({
			 resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		 });
	 }, []);
 
	 // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	 useEffect(() => {
		 mimmikCssForResBtns({
			 domObj: document,
			 resOption,
		 });
	 }, [resOption]);
 
	 // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	 useEffect(() => {
		 const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			 domObj: document,
			 select,
			 setAttributes,
		 });
		 return () => {
			 cleanUp();
		 };
	 }, []);
 
	 const resRequiredProps = {
		 attributes,
		 setAttributes,
		 resOption,
	 };
 
	 return (
		 <InspectorControls key="controls">
			 <div className="eb-panel-control">
 
				 <TabPanel
					  className="eb-parent-tab-panel"
					  activeClass="active-tab"
					  // onSelect={onSelect}
					  tabs={ [
						  {
							  name: 'general',
							  title: 'General',
							  className: 'eb-tab general',
						  },
						  {
							  name: 'styles',
							  title: 'Styles',
							  className: 'eb-tab styles',
						  },
						  {
							  name: 'advance',
							  title: 'Advance',
							  className: 'eb-tab advance',
						  },
					  ] }
				 >
					 {(tab) =>
						 <div className={"eb-tab-controls" + tab.name}>
							 {tab.name === "general" && (
								 <>
									 <PanelBody title={__("Layout Settings")} initialOpen={true}>
										 {avatarInline && (
											 <BaseControl label={__("User Info Position")}>
												 <ButtonGroup>
													 {ALIGN_ITEMS.map((item) => (
														 <Button
															 isLarge
															 isSecondary={avatarPosition !== item.value}
															 isPrimary={avatarPosition === item.value}
															 onClick={() =>
																 setAttributes({
																	 avatarPosition: item.value,
																 })
															 }
														 >
															 {item.label}
														 </Button>
													 ))}
												 </ButtonGroup>
											 </BaseControl>
										 )}
 
										 {!avatarInline && displayAvatar && (
											 <BaseControl
												 label={avatarInline ? __("User Info Align") : __("Image Align")}
											 >
												 <ButtonGroup>
													 {ALIGN_ITEMS.map((item) => (
														 <Button
															 isLarge
															 isSecondary={avatarAlign !== item.value}
															 isPrimary={avatarAlign === item.value}
															 onClick={() =>
																 setAttributes({
																	 avatarAlign: item.value,
																 })
															 }
														 >
															 {item.label}
														 </Button>
													 ))}
												 </ButtonGroup>
											 </BaseControl>
										 )}
 
										 <BaseControl label={__("Description Position")}>
											 <ButtonGroup>
												 {DESC_POSITIONS.map((item) => (
													 <Button
														 isLarge
														 isSecondary={avatarOrder !== item.value}
														 isPrimary={avatarOrder === item.value}
														 onClick={() =>
															 setAttributes({
																 avatarOrder: item.value,
															 })
														 }
													 >
														 {item.label}
													 </Button>
												 ))}
											 </ButtonGroup>
										 </BaseControl>
										 <BaseControl label={__("User Name Align")}>
											 <ButtonGroup>
												 {TEXT_ALIGN.map((option) => (
													 <Button
														 isLarge
														 isSecondary={textAlign !== option.value}
														 isPrimary={textAlign === option.value}
														 onClick={() =>
															 setAttributes({
																 textAlign: option.value,
															 })
														 }
													 >
														 {option.label}
													 </Button>
												 ))}
											 </ButtonGroup>
										 </BaseControl>
 
										 <BaseControl label={__("User Info Align")}>
											 <ButtonGroup>
												 {ALIGN_ITEMS_VERTICAL.map((item) => (
													 <Button
														 isLarge
														 isSecondary={userInfoAlign !== item.value}
														 isPrimary={userInfoAlign === item.value}
														 onClick={() =>
															 setAttributes({
																 userInfoAlign: item.value,
															 })
														 }
													 >
														 {item.label}
													 </Button>
												 ))}
											 </ButtonGroup>
										 </BaseControl>
									 </PanelBody>
 
									 <PanelBody title={__("Avatar")} initialOpen={false}>
										 <ToggleControl
											 label="Display  Avatar"
											 checked={displayAvatar}
											 onChange={() => setAttributes({ displayAvatar: !displayAvatar })}
										 />
 
										 {displayAvatar && (
											 <ToggleControl
												 label={__("Avatar Inline")}
												 checked={avatarInline}
												 onChange={() => setAttributes({ avatarInline: !avatarInline })}
											 />
										 )}
 
										 {displayAvatar && (
											 <BaseControl
												 id="eb-testimonial-image-pos"
												 label={__("Image Position")}
											 >
												 <ToggleButton
													 options={IMG_POSITIONS}
													 onChange={(value) => setAttributes({ imagePosition: value })}
												 />
											 </BaseControl>
										 )}
 
										 {displayAvatar && imageUrl && (
											 <PanelBody title={__("Image Setting")}>
												 {imageUrl && (
													 <ImageAvatar
														 imageUrl={imageUrl}
														 onDeleteImage={() => setAttributes({ imageUrl: null })}
													 />
												 )}
 
												 <ToggleControl
													 label={__("Round Avatar")}
													 checked={borderRadius === 50}
													 onChange={() =>
														 setAttributes({
															 borderRadius: borderRadius === 50 ? 0 : 50,
														 })
													 }
												 />
 
												 <RangeControl
													 label={__("Border Radius")}
													 value={borderRadius}
													 onChange={(newValue) =>
														 setAttributes({ borderRadius: newValue })
													 }
													 min={0}
													 max={50}
												 />
											 </PanelBody>
										 )}
									 </PanelBody>
								 </>
							 )}
							 {tab.name === "styles" && (
								 <>
									 <PanelColorSettings
										 title={__("Colors")}
										 initialOpen={true}
										 colorSettings={[
											 {
												 value: userNameColor,
												 onChange: (userNameColor) => setAttributes({ userNameColor }),
												 label: __("Username"),
											 },
											 {
												 value: companyColor,
												 onChange: (companyColor) => setAttributes({ companyColor }),
												 label: __("Company"),
											 },
											 {
												 value: descriptionColor,
												 onChange: (descriptionColor) =>
													 setAttributes({ descriptionColor }),
												 label: __("Description"),
											 },
											 {
												 value: quoteColor,
												 onChange: (quoteColor) => setAttributes({ quoteColor }),
												 label: __("Quote"),
											 },
										 ]}
									 />
 
									 <PanelBody title={__("Typography")} initialOpen={false}>
										 <TypographyDropdown
											 baseLabel="Username"
											 typographyPrefixConstant={"username"}
											 resRequiredProps={resRequiredProps}
										 />
										 <TypographyDropdown
											 baseLabel="Company"
											 typographyPrefixConstant={"company"}
											 resRequiredProps={resRequiredProps}
										 />
										 <TypographyDropdown
											 baseLabel="Description"
											 typographyPrefixConstant={"description"}
											 resRequiredProps={resRequiredProps}
										 />
									 </PanelBody>
								 </>
							 )}
							 {tab.name === "advance" && (
								 <>
									 <PanelBody title={__("Margin & Padding")} initialOpen={true}>
										 <ResponsiveDimensionsControl
											 resRequiredProps={resRequiredProps}
											 controlName={"margin"}
											 baseLabel="Margin"
										 />
										 <ResponsiveDimensionsControl
											 resRequiredProps={resRequiredProps}
											 controlName={"padding"}
											 baseLabel="Padding"
										 />
									 </PanelBody>
 
									 <PanelBody title={__("Background ")} initialOpen={false}>
										 <BackgroundControl
											 controlName={TestimonialWrapBg}
											 resRequiredProps={resRequiredProps}
											 noOverlay
										 />
									 </PanelBody>
 
									 <PanelBody title={__("Border & Shadow")} initialOpen={false}>
										 <BorderShadowControl
											 controlName={WrpBdShadow}
											 resRequiredProps={resRequiredProps}
											 // noShadow
											 // noBorder
										 />
									 </PanelBody>
								 </>
							 )}
						 </div>
					 }
 
				 </TabPanel>
			 </div>
		 </InspectorControls>
	 );
 }
 
 export default Inspector;
 