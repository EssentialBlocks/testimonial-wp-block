/**
 * WordPress dependencies
 */
/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	Button,
	BaseControl,
	ButtonGroup,
	TabPanel
} from "@wordpress/components";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

import objAttributes from "./attributes";

import {
	DESC_POSITIONS,
	TEXT_ALIGN,
	ALIGN_ITEMS,
	ALIGN_ITEMS_VERTICAL,
	IMG_POSITIONS,
	WrpBdShadow,
	TestimonialWrapBg,
	QUOTE_SIZE,
	UNIT_TYPES,
} from "./constants";

const {
	// mimmikCssForResBtns,
	// mimmikCssOnPreviewBtnClickWhileBlockSelected,

	// 
	ImageAvatar,
	ResponsiveDimensionsControl,
	TypographyDropdown,
	ToggleButton,
	BorderShadowControl,
	BackgroundControl,
	ResponsiveRangeController,
} = window.EBControls;

const editorStoreForGettingPreivew =
	eb_style_handler.editor_type === "edit-site"
		? "core/edit-site"
		: "core/edit-post";

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
		enableQuote,
		quoteColor,
		companyColor,
		quoteHorizontalPosition,
		quoteVerticalPosition,
		descTextAlign,
	} = attributes;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// // this useEffect is for mimmiking css for all the eb blocks on resOption changing
	// useEffect(() => {
	// 	mimmikCssForResBtns({
	// 		domObj: document,
	// 		resOption,
	// 	});
	// }, [resOption]);

	// // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	// useEffect(() => {
	// 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
	// 		domObj: document,
	// 		select,
	// 		setAttributes,
	// 	});
	// 	return () => {
	// 		cleanUp();
	// 	};
	// }, []);

	const resRequiredProps = {
		attributes,
		setAttributes,
		resOption,
		objAttributes
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">

				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={[
						{
							name: 'general',
							title: 'General',
							className: 'eb-tab general',
						},
						{
							name: 'styles',
							title: 'Style',
							className: 'eb-tab styles',
						},
						{
							name: 'advance',
							title: 'Advanced',
							className: 'eb-tab advance',
						},
					]}
				>
					{(tab) =>
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<PanelBody title={__("Layout Settings", "essential-blocks")} initialOpen={true}>
										{avatarInline && (
											<BaseControl label={__("User Info Position", "essential-blocks")}>
												<ButtonGroup>
													{ALIGN_ITEMS.map((item) => (
														<Button
															// isLarge
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
												label={avatarInline ? __("User Info Align", "essential-blocks") : __("Image Align", "essential-blocks")}
											>
												<ButtonGroup>
													{ALIGN_ITEMS.map((item) => (
														<Button
															// isLarge
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

										<BaseControl label={__("Description Position", "essential-blocks")}>
											<ButtonGroup>
												{DESC_POSITIONS.map((item) => (
													<Button
														// isLarge
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

										<BaseControl label={__("Description Align", "essential-blocks")}>
											<ButtonGroup>
												{TEXT_ALIGN.map((option) => (
													<Button
														// isLarge
														isSecondary={descTextAlign !== option.value}
														isPrimary={descTextAlign === option.value}
														onClick={() =>
															setAttributes({
																descTextAlign: option.value,
															})
														}
													>
														{option.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										<BaseControl label={__("User Name Align", "essential-blocks")}>
											<ButtonGroup>
												{TEXT_ALIGN.map((option) => (
													<Button
														// isLarge
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

										<BaseControl label={__("User Info Align", "essential-blocks")}>
											<ButtonGroup>
												{ALIGN_ITEMS_VERTICAL.map((item) => (
													<Button
														// isLarge
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

										<ToggleControl
											label="Enable Quote"
											checked={enableQuote}
											onChange={() => setAttributes({ enableQuote: !enableQuote })}
										/>

										{enableQuote && (
											<>
												<BaseControl label={__("Quote Horizontal Align", "essential-blocks")}>
													<ButtonGroup>
														{ALIGN_ITEMS.map((item) => (
															<Button
																// isLarge
																isSecondary={quoteHorizontalPosition !== item.value}
																isPrimary={quoteHorizontalPosition === item.value}
																onClick={() =>
																	setAttributes({
																		quoteHorizontalPosition: item.value,
																	})
																}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>

												{quoteHorizontalPosition === "center" && (
													<BaseControl label={__("Quote Vertical Position", "essential-blocks")}>
														<ButtonGroup>
															{DESC_POSITIONS.map((item) => (
																<Button
																	// isLarge
																	isSecondary={quoteVerticalPosition !== item.value}
																	isPrimary={quoteVerticalPosition === item.value}
																	onClick={() =>
																		setAttributes({
																			quoteVerticalPosition: item.value,
																		})
																	}
																>
																	{item.label}
																</Button>
															))}
														</ButtonGroup>
													</BaseControl>
												)}
											</>
										)}

									</PanelBody>

									<PanelBody title={__("Avatar", "essential-blocks")} initialOpen={false}>
										<ToggleControl
											label="Display Avatar"
											checked={displayAvatar}
											onChange={() => setAttributes({ displayAvatar: !displayAvatar })}
										/>

										{displayAvatar && (
											<ToggleControl
												label={__("Avatar Inline", "essential-blocks")}
												checked={avatarInline}
												onChange={() => setAttributes({ avatarInline: !avatarInline })}
											/>
										)}

										{displayAvatar && (
											<BaseControl
												id="eb-testimonial-image-pos"
												label={__("Image Position", "essential-blocks")}
											>
												<ToggleButton
													options={IMG_POSITIONS}
													onChange={(value) => setAttributes({ imagePosition: value })}
												/>
											</BaseControl>
										)}

										{displayAvatar && imageUrl && (
											<PanelBody title={__("Image Setting", "essential-blocks")}>
												{imageUrl && (
													<ImageAvatar
														imageUrl={imageUrl}
														onDeleteImage={() => setAttributes({ imageUrl: null })}
													/>
												)}

												<ToggleControl
													label={__("Round Avatar", "essential-blocks")}
													checked={borderRadius === 50}
													onChange={() =>
														setAttributes({
															borderRadius: borderRadius === 50 ? 0 : 50,
														})
													}
												/>

												<RangeControl
													label={__("Border Radius", "essential-blocks")}
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
										title={__("Colors", "essential-blocks")}
										initialOpen={true}
										colorSettings={[
											{
												value: userNameColor,
												onChange: (userNameColor) => setAttributes({ userNameColor }),
												label: __("Username", "essential-blocks"),
											},
											{
												value: companyColor,
												onChange: (companyColor) => setAttributes({ companyColor }),
												label: __("Company", "essential-blocks"),
											},
											{
												value: descriptionColor,
												onChange: (descriptionColor) =>
													setAttributes({ descriptionColor }),
												label: __("Description", "essential-blocks"),
											},
											{
												value: quoteColor,
												onChange: (quoteColor) => setAttributes({ quoteColor }),
												label: __("Quote", "essential-blocks"),
											},
										]}
									/>

									<PanelBody title={__("Typography", "essential-blocks")} initialOpen={false}>
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
										{enableQuote && (
											<ResponsiveRangeController
												baseLabel={__("Quote Size", "essential-blocks")}
												controlName={QUOTE_SIZE}
												resRequiredProps={resRequiredProps}
												units={UNIT_TYPES}
												min={1}
												max={200}
												step={1}
											/>
										)}
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

									<PanelBody title={__("Background ", "essential-blocks")} initialOpen={false}>
										<BackgroundControl
											controlName={TestimonialWrapBg}
											resRequiredProps={resRequiredProps}
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
