/**
 * WordPress dependencies
 */
const { RichText } = wp.blockEditor;

/**
 * Internal dependencies
 */
import {
	DEFAULT_BACKGROUND,
	DEFAULT_SHADOW_COLOR,
	DEFAULT_NAME_SIZE,
	DEFAULT_NAME_COLOR,
	DEFAULT_COMPANY_SIZE,
	DEFAULT_COMPANY_COLOR,
	DEFAULT_DESCRIPTION_SIZE,
	DEFAULT_DESCRIPTION_COLOR,
	DEFAULT_QUOTE_SIZE,
	DEFAULT_QUOTE_COLOR,
} from "./constants";

const Save = ({ attributes }) => {
	const {
		fontSize,
		displayAvatar,
		avatarInline,
		avatarPosition,
		avatarAlign,
		borderRadius,
		avatarOrder,
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
		backgroundColor,
		backgroundImageURL,
		backgroundType,
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

	const containerStyle = {
		backgroundImage:
			backgroundType === "image" && backgroundImageURL
				? `url('${backgroundImageURL}')`
				: "none",
		backgroundColor: backgroundColor || DEFAULT_BACKGROUND,
		backgroundPosition:
			bgPosition === "custom"
				? `${bgXPos}${bgXPosUnit} ${bgYPos}${bgYPosUnit}`
				: bgPosition,
		backgroundSize: bgSize === "custom" ? bgWidth + bgWidthUnit : bgSize,
		backgroundRepeat: bgRepeat,
		backgroundAttachment: bgAttachment,
		margin: `${marginTop || 0}${marginUnit} ${marginRight || 0}${marginUnit} ${
			marginBottom || 0
		}${marginUnit} ${marginLeft || 0}${marginUnit}`,
		padding: `${paddingTop || 10}${paddingUnit} ${
			paddingRight || 10
		}${paddingUnit} ${paddingBottom || 10}${paddingUnit} ${
			paddingLeft || 10
		}${paddingUnit}`,
		boxShadow: `${shadowHOffset || 0}px ${shadowVOffset || 0}px ${
			shadowBlur || 0
		}px ${shadowSpread || 0}px ${shadowColor || DEFAULT_SHADOW_COLOR}`,
	};

	const avatarContainerStyle = {
		order: avatarOrder,
		justifyContent: avatarPosition,
		alignItems: avatarAlign,
		fontSize: `${fontSize}px`,
		flexDirection: avatarInline ? "row" : "column",
	};

	const imageContainerStyle = {
		order: imagePosition,
		display: displayAvatar && imageUrl ? "block" : "none",
	};

	const userInfoStyle = {
		textAlign: textAlign,
		justifyContent: userInfoPos,
		alignSelf: userInfoAlign,
	};

	const userNameStyle = {
		fontSize: `${nameFontSize || DEFAULT_NAME_SIZE}${nameSizeUnit}`,
		fontFamily: nameFontFamily,
		fontWeight: nameFontWeight,
		textTransform: nameTextTransform,
		textDecoration: nameTextDecoration,
		letterSpacing: nameLetterSpacing
			? `${nameLetterSpacing}${nameLetterSpacingUnit}`
			: undefined,
		lineHeight: nameLineHeight
			? `${nameLineHeight}${nameLineHeightUnit}`
			: undefined,
		color: userNameColor || DEFAULT_NAME_COLOR,
		margin: 0,
	};

	const companyNameStyle = {
		fontSize: `${companyFontSize || DEFAULT_COMPANY_SIZE}${companySizeUnit}`,
		fontFamily: companyFontFamily,
		fontWeight: companyFontWeight,
		textTransform: companyTextTransform,
		textDecoration: companyTextDecoration,
		letterSpacing: companyLetterSpacing
			? `${companyLetterSpacing}${companyLetterSpacingUnit}`
			: undefined,
		lineHeight: companyLineHeight
			? `${companyLineHeight}${companyLineHeightUnit}`
			: undefined,
		color: companyColor || DEFAULT_COMPANY_COLOR,
		margin: 0,
	};

	const descriptionStyle = {
		fontSize: `${
			descriptionFontSize || DEFAULT_DESCRIPTION_SIZE
		}${descriptionSizeUnit}`,
		fontFamily: descriptionFontFamily,
		fontWeight: descriptionFontWeight,
		textTransform: descriptionTextTransform,
		textDecoration: descriptionTextDecoration,
		letterSpacing: descriptionLetterSpacing
			? `${descriptionLetterSpacing}${descriptionLetterSpacingUnit}`
			: undefined,
		lineHeight: descriptionLineHeight
			? `${descriptionLineHeight}${descriptionLineHeightUnit}`
			: undefined,
		color: descriptionColor || DEFAULT_DESCRIPTION_COLOR,
		margin: 0,
		paddingRight: 20,
	};

	const quoteStyle = {
		color: quoteColor || DEFAULT_QUOTE_COLOR,
		fontSize: `${quoteSize || DEFAULT_QUOTE_SIZE}${quoteSizeUnit}`,
	};

	return (
		<div className="eb-testimonial-wrapper">
			<div className="eb-testimonial-container" style={containerStyle}>
				<div
					className={`eb-avatar-container ${
						avatarInline ? "avatar-inline" : "avatar-basic"
					} `}
					style={avatarContainerStyle}
				>
					<div className="image-container" style={imageContainerStyle}>
						<div
							style={{
								backgroundImage: `url(${imageUrl})`,
								borderRadius: `${borderRadius}%`,
							}}
							className="eb-avatar-style"
						/>
					</div>
					<div className="eb-userinfo-container" style={userInfoStyle}>
						<RichText.Content
							tagName="p"
							className="username-one"
							value={userName}
							style={userNameStyle}
						/>

						<RichText.Content
							tagName="p"
							className="company-one"
							value={companyName}
							style={companyNameStyle}
						/>
					</div>
				</div>

				<div className="eb-description-container">
					<div
						className="fas fa-quote-left eb-testimonial-quote-style"
						style={quoteStyle}
					/>
					<RichText.Content
						tagName="p"
						className="description-one"
						value={description}
						style={descriptionStyle}
					/>
				</div>
			</div>
		</div>
	);
};

export default Save;
