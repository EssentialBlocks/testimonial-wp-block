/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { Component } from "@wordpress/element";
import {
	InspectorControls,
	PanelColorSettings,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	Button,
	BaseControl,
	ButtonGroup,
	SelectControl,
	Dropdown,
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import ImageAvater from "../util/image-avatar/ImageAvater";
import {
	DESC_POSITIONS,
	TEXT_ALIGN,
	ALIGN_ITEMS,
	IMG_POSITIONS,
	BG_TYPES,
	BACKGROUND_POSITION,
	BACKGROUND_SIZE,
	BACKGROUND_REPEAT,
	BACKGROUND_ATTACHMENT,
	FONT_WEIGHTS,
	TEXT_DECORATION,
	TEXT_TRANSFORM,
} from "./constants";
import DimensionsControl from "../util/dimensions-control";
import UnitControl from "../util/unit-control";
import FontPicker from "../util/typography-control/FontPicker";
import ColorControl from "../util/color-control";

class Inspector extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		const {
			displayAvatar,
			avatarInline,
			avatarPosition,
			avatarAlign,
			borderRadius,
			avatarOrder,
			imageUrl,
			userInfoAlign,
			textAlign,
			imagePosition,
			userNameColor,
			descriptionColor,
			quoteColor,
			quoteSize,
			backgroundColor,
			backgroundImageURL,
			marginTop,
			marginRight,
			marginBottom,
			marginLeft,
			paddingTop,
			paddingRight,
			paddingBottom,
			paddingLeft,
			shadowColor,
			shadowHOffset,
			shadowVOffset,
			shadowSpread,
			shadowBlur,
			marginUnit,
			paddingUnit,
			quoteSizeUnit,
			companyColor,
			backgroundType,
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

		const QUOTE_SIZE_STEP = quoteSizeUnit === "em" ? 0.1 : 1;
		const QUOTE_SIZE_MAX = quoteSizeUnit === "em" ? 10 : 100;

		const NAME_SIZE_STEP = nameSizeUnit === "em" ? 0.1 : 1;
		const NAME_SIZE_MAX = nameSizeUnit === "em" ? 10 : 100;

		const NAME_SPACING_STEP = nameLetterSpacingUnit === "em" ? 0.1 : 1;
		const NAME_SPACING_MAX = nameLetterSpacingUnit === "em" ? 10 : 100;

		const NAME_LINE_HEIGHT_STEP = nameLineHeightUnit === "em" ? 0.1 : 1;
		const NAME_LINE_HEIGHT_MAX = nameLineHeightUnit === "em" ? 10 : 100;

		const COMPANY_SIZE_STEP = companySizeUnit === "em" ? 0.1 : 1;
		const COMPANY_SIZE_MAX = companySizeUnit === "em" ? 10 : 100;

		const COMPANY_SPACING_STEP = companyLetterSpacingUnit === "em" ? 0.1 : 1;
		const COMPANY_SPACING_MAX = companyLetterSpacingUnit === "em" ? 10 : 100;

		const COMPANY_LINE_HEIGHT_STEP = companyLineHeightUnit === "em" ? 0.1 : 1;
		const COMPANY_LINE_HEIGHT_MAX = companyLineHeightUnit === "em" ? 10 : 100;

		const DESCRIPTION_SIZE_STEP = descriptionSizeUnit === "em" ? 0.1 : 1;
		const DESCRIPTION_SIZE_MAX = descriptionSizeUnit === "em" ? 10 : 100;

		const DESCRIPTION_SPACING_STEP =
			descriptionLetterSpacingUnit === "em" ? 0.1 : 1;
		const DESCRIPTION_SPACING_MAX =
			descriptionLetterSpacingUnit === "em" ? 10 : 100;

		const DESCRIPTION_LINE_HEIGHT_STEP =
			descriptionLineHeightUnit === "em" ? 0.1 : 1;
		const DESCRIPTION_LINE_HEIGHT_MAX =
			descriptionLineHeightUnit === "em" ? 10 : 100;

		return (
			<InspectorControls key="controls">
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
							<ButtonGroup id="eb-testimonial-image-pos">
								{IMG_POSITIONS.map((item) => (
									<Button
										isLarge
										isSecondary={imagePosition !== item.value}
										isPrimary={imagePosition === item.value}
										onClick={() =>
											setAttributes({
												imagePosition: item.value,
											})
										}
									>
										{item.label}
									</Button>
								))}
							</ButtonGroup>
						</BaseControl>
					)}

					{displayAvatar && imageUrl && (
						<PanelBody title={__("Image Setting")}>
							{imageUrl && (
								<ImageAvater
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

				<PanelBody title={__("Layout Settings")} initialOpen={false}>
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
							{ALIGN_ITEMS.map((item) => (
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

				<PanelBody title={__("Background Settings")} initialOpen={false}>
					<BaseControl label={__("Background Types")}>
						<ButtonGroup>
							{BG_TYPES.map((type) => (
								<Button
									isPrimary={backgroundType === type.value}
									isSecondary={backgroundType !== type.value}
									onClick={() =>
										setAttributes({
											backgroundType: type.value,
										})
									}
								>
									{type.label}
								</Button>
							))}
						</ButtonGroup>
					</BaseControl>

					{backgroundType === "image" && !backgroundImageURL && (
						<MediaUpload
							onSelect={(media) =>
								setAttributes({ backgroundImageURL: media.url })
							}
							type="image"
							value={backgroundImageURL}
							render={({ open }) => (
								<Button
									className="eb-testimonial-background-upload components-button"
									label={__("Upload Background Image")}
									icon="format-image"
									onClick={open}
								/>
							)}
						/>
					)}

					{backgroundType === "image" && backgroundImageURL && (
						<PanelBody title={__("Background Image")}>
							<ImageAvater
								imageUrl={backgroundImageURL}
								onDeleteImage={() =>
									setAttributes({ backgroundImageURL: null })
								}
							/>

							<SelectControl
								label={__("Background Position")}
								value={bgPosition}
								options={BACKGROUND_POSITION}
								onChange={(bgPosition) => setAttributes({ bgPosition })}
							/>

							{bgPosition === "custom" && (
								<>
									<UnitControl
										selectedUnit={bgXPosUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(bgXPosUnit) => setAttributes({ bgXPosUnit })}
									/>

									<RangeControl
										label={__("X Position")}
										value={bgXPos}
										onChange={(bgXPos) => setAttributes({ bgXPos })}
									/>

									<UnitControl
										selectedUnit={bgYPosUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(bgYPosUnit) => setAttributes({ bgYPosUnit })}
									/>
									<RangeControl
										label={__("Y Position")}
										value={bgYPos}
										onChange={(bgYPos) => setAttributes({ bgYPos })}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Size")}
								value={bgSize}
								options={BACKGROUND_SIZE}
								onChange={(bgSize) => setAttributes({ bgSize })}
							/>

							{bgSize === "custom" && (
								<>
									<UnitControl
										selectedUnit={bgWidthUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
											{ label: "%", value: "%" },
										]}
										onClick={(bgWidthUnit) => setAttributes({ bgWidthUnit })}
									/>

									<RangeControl
										label={__("Width")}
										value={bgWidth}
										onChange={(bgWidth) => setAttributes({ bgWidth })}
									/>
								</>
							)}

							<SelectControl
								label={__("Background Repeat")}
								value={bgRepeat}
								options={BACKGROUND_REPEAT}
								onChange={(bgRepeat) => setAttributes({ bgRepeat })}
							/>

							<SelectControl
								label={__("Background Attachment")}
								value={bgAttachment}
								options={BACKGROUND_ATTACHMENT}
								onChange={(bgAttachment) => setAttributes({ bgAttachment })}
							/>
						</PanelBody>
					)}

					{backgroundType === "color" && (
						<ColorControl
							label={__("Background Color")}
							color={backgroundColor}
							onChange={(backgroundColor) => setAttributes({ backgroundColor })}
						/>
					)}
				</PanelBody>

				<PanelColorSettings
					title={__("Colors")}
					initialOpen={false}
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
					<UnitControl
						selectedUnit={quoteSizeUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "%", value: "%" },
							{ label: "em", value: "em" },
						]}
						onClick={(quoteSizeUnit) => setAttributes({ quoteSizeUnit })}
					/>

					<RangeControl
						label={__("Quote Size")}
						value={quoteSize}
						onChange={(quoteSize) => setAttributes({ quoteSize })}
						step={QUOTE_SIZE_STEP}
						min={0}
						max={QUOTE_SIZE_MAX}
					/>

					<BaseControl label={__("Username")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classname"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={nameFontFamily}
										onChange={(nameFontFamily) =>
											setAttributes({ nameFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={nameSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(nameSizeUnit) => setAttributes({ nameSizeUnit })}
									/>

									<RangeControl
										label={__("Font Size")}
										value={nameFontSize}
										onChange={(nameFontSize) => setAttributes({ nameFontSize })}
										step={NAME_SIZE_STEP}
										min={0}
										max={NAME_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={nameFontWeight}
										options={FONT_WEIGHTS}
										onChange={(nameFontWeight) =>
											setAttributes({ nameFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={nameTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(nameTextTransform) =>
											setAttributes({ nameTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={nameTextDecoration}
										options={TEXT_DECORATION}
										onChange={(nameTextDecoration) =>
											setAttributes({ nameTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={nameLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(nameLetterSpacingUnit) =>
											setAttributes({ nameLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={nameLetterSpacing}
										onChange={(nameLetterSpacing) =>
											setAttributes({ nameLetterSpacing })
										}
										min={0}
										max={NAME_SPACING_MAX}
										step={NAME_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={nameLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(nameLineHeightUnit) =>
											setAttributes({ nameLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={nameLineHeight}
										onChange={(nameLineHeight) =>
											setAttributes({ nameLineHeight })
										}
										min={0}
										max={NAME_LINE_HEIGHT_MAX}
										step={NAME_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl label={__("Company")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classcompany"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={companyFontFamily}
										onChange={(companyFontFamily) =>
											setAttributes({ companyFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={companySizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(companySizeUnit) =>
											setAttributes({ companySizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={companyFontSize}
										onChange={(companyFontSize) =>
											setAttributes({ companyFontSize })
										}
										step={COMPANY_SIZE_STEP}
										min={0}
										max={COMPANY_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={companyFontWeight}
										options={FONT_WEIGHTS}
										onChange={(companyFontWeight) =>
											setAttributes({ companyFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={companyTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(companyTextTransform) =>
											setAttributes({ companyTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={companyTextDecoration}
										options={TEXT_DECORATION}
										onChange={(companyTextDecoration) =>
											setAttributes({ companyTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={companyLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(companyLetterSpacingUnit) =>
											setAttributes({ companyLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={companyLetterSpacing}
										onChange={(companyLetterSpacing) =>
											setAttributes({ companyLetterSpacing })
										}
										min={0}
										max={COMPANY_SPACING_MAX}
										step={COMPANY_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={companyLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(companyLineHeightUnit) =>
											setAttributes({ companyLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={companyLineHeight}
										onChange={(companyLineHeight) =>
											setAttributes({ companyLineHeight })
										}
										min={0}
										max={COMPANY_LINE_HEIGHT_MAX}
										step={COMPANY_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>

					<BaseControl label={__("Description")} className="eb-typography-base">
						<Dropdown
							className="eb-typography-dropdown"
							contentClassName="my-popover-content-classdescription"
							position="bottom right"
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									isSmall
									onClick={onToggle}
									aria-expanded={isOpen}
									icon="edit"
								></Button>
							)}
							renderContent={() => (
								<div style={{ padding: "1rem" }}>
									<FontPicker
										label={__("Font Family")}
										value={descriptionFontFamily}
										onChange={(descriptionFontFamily) =>
											setAttributes({ descriptionFontFamily })
										}
									/>

									<UnitControl
										selectedUnit={descriptionSizeUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "%", value: "%" },
											{ label: "em", value: "em" },
										]}
										onClick={(descriptionSizeUnit) =>
											setAttributes({ descriptionSizeUnit })
										}
									/>

									<RangeControl
										label={__("Font Size")}
										value={descriptionFontSize}
										onChange={(descriptionFontSize) =>
											setAttributes({ descriptionFontSize })
										}
										step={DESCRIPTION_SIZE_STEP}
										min={0}
										max={DESCRIPTION_SIZE_MAX}
									/>

									<SelectControl
										label={__("Font Weight")}
										value={descriptionFontWeight}
										options={FONT_WEIGHTS}
										onChange={(descriptionFontWeight) =>
											setAttributes({ descriptionFontWeight })
										}
									/>

									<SelectControl
										label={__("Text Transform")}
										value={descriptionTextTransform}
										options={TEXT_TRANSFORM}
										onChange={(descriptionTextTransform) =>
											setAttributes({ descriptionTextTransform })
										}
									/>

									<SelectControl
										label={__("Text Decoration")}
										value={descriptionTextDecoration}
										options={TEXT_DECORATION}
										onChange={(descriptionTextDecoration) =>
											setAttributes({ descriptionTextDecoration })
										}
									/>

									<UnitControl
										selectedUnit={descriptionLetterSpacingUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(descriptionLetterSpacingUnit) =>
											setAttributes({ descriptionLetterSpacingUnit })
										}
									/>

									<RangeControl
										label={__("Letter Spacing")}
										value={descriptionLetterSpacing}
										onChange={(descriptionLetterSpacing) =>
											setAttributes({ descriptionLetterSpacing })
										}
										min={0}
										max={DESCRIPTION_SPACING_MAX}
										step={DESCRIPTION_SPACING_STEP}
									/>

									<UnitControl
										selectedUnit={descriptionLineHeightUnit}
										unitTypes={[
											{ label: "px", value: "px" },
											{ label: "em", value: "em" },
										]}
										onClick={(descriptionLineHeightUnit) =>
											setAttributes({ descriptionLineHeightUnit })
										}
									/>

									<RangeControl
										label={__("Line Height")}
										value={descriptionLineHeight}
										onChange={(descriptionLineHeight) =>
											setAttributes({ descriptionLineHeight })
										}
										min={0}
										max={DESCRIPTION_LINE_HEIGHT_MAX}
										step={DESCRIPTION_LINE_HEIGHT_STEP}
									/>
								</div>
							)}
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title={__("Box Shadow")} initialOpen={false}>
					<ColorControl
						label={__("Shadow Color")}
						color={shadowColor}
						onChange={(shadowColor) => setAttributes({ shadowColor })}
					/>

					<RangeControl
						label={__("Horizontal Offset")}
						value={shadowHOffset}
						allowReset
						onChange={(shadowHOffset) => setAttributes({ shadowHOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Vertical Offset")}
						value={shadowVOffset}
						allowReset
						onChange={(shadowVOffset) => setAttributes({ shadowVOffset })}
						min={0}
						max={100}
					/>

					<RangeControl
						label={__("Blur")}
						value={shadowBlur}
						allowReset
						onChange={(shadowBlur) => setAttributes({ shadowBlur })}
						min={0}
						max={20}
					/>

					<RangeControl
						label={__("Spread")}
						value={shadowSpread}
						allowReset
						onChange={(shadowSpread) => setAttributes({ shadowSpread })}
						min={0}
						max={20}
					/>
				</PanelBody>

				<PanelBody title={__("Margin & Padding")} initialOpen={false}>
					<UnitControl
						selectedUnit={marginUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(marginUnit) => setAttributes({ marginUnit })}
					/>

					<DimensionsControl
						label={__("Margin")}
						top={marginTop}
						right={marginRight}
						bottom={marginBottom}
						left={marginLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								marginTop: top,
								marginRight: right,
								marginBottom: bottom,
								marginLeft: left,
							})
						}
					/>

					<UnitControl
						selectedUnit={paddingUnit}
						unitTypes={[
							{ label: "px", value: "px" },
							{ label: "em", value: "em" },
							{ label: "%", value: "%" },
						]}
						onClick={(paddingUnit) => setAttributes({ paddingUnit })}
					/>

					<DimensionsControl
						label={__("Padding")}
						top={paddingTop}
						right={paddingRight}
						bottom={paddingBottom}
						left={paddingLeft}
						onChange={({ top, right, bottom, left }) =>
							setAttributes({
								paddingTop: top,
								paddingRight: right,
								paddingBottom: bottom,
								paddingLeft: left,
							})
						}
					/>
				</PanelBody>
			</InspectorControls>
		);
	}
}

export default Inspector;
