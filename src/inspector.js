/**
 * WordPress dependencies 
 */
import { __ } from "@wordpress/i18n";
// import { Component } from "@wordpress/element";
import { useEffect } from "@wordpress/element";
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
} from "./constants";
import DimensionsControl from "../util/dimensions-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import UnitControl from "../util/unit-control";
import ColorControl from "../util/color-control";
import ResPanelBody from "./ResPanelBody";
import TypographyDropdown from "../util/typography-control-v2";
import ToggleButton from "../util/toggle-button";

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
		companyColor,
		backgroundType,
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

	const resRequiredProps = {
		attributes,
		setAttributes,
		resOption,
	};

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
						<ToggleButton
							options={IMG_POSITIONS}
							onChange={(value) => setAttributes({ imagePosition: value })}
						/>
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
				<TypographyDropdown
					baseLabel="Username"
					typographyPrefixConstant={'username'}
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

		</InspectorControls>
	);
}

export default Inspector;
