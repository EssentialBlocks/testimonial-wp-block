import { WrpBdShadow, TestimonialWrapBg, QUOTE_SIZE, IMG_WIDTH, ImgBdShadow, RATING_SIZE, IMG_GAP } from "./constants";

const {
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateTypographyStyles,
    generateResponsiveRangeStyles,
    generateBorderShadowStyles,
    StyleComponent
} = window.EBTestimonialControls;

export default function Style(props) {
    const { attributes, setAttributes, name } = props;
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
        imageUrl,
        descTextAlign,
        userInfoAlign,
        textAlign,
        userInfoPos,
        imagePosition,
        userNameColor,
        descriptionColor,
        quoteColor,
        companyColor,
        quoteHorizontalPosition,
        quoteVerticalPosition,
        classHook,
        imgWidth_Range,
        img_Bdr_Bottom,
        img_Bdr_Top,
        img_Bdr_Left,
        img_Bdr_Right,
        img_Bdr_Unit,
        imgWidth_Unit,

        TABimgWidth_Range,
        TABimg_Bdr_Bottom,
        TABimg_Bdr_Top,
        TABimg_Bdr_Left,
        TABimg_Bdr_Right,
        TABimg_Bdr_Unit,
        TABimgWidth_Unit,

        MOBimgWidth_Range,
        MOBimg_Bdr_Bottom,
        MOBimg_Bdr_Top,
        MOBimg_Bdr_Left,
        MOBimg_Bdr_Right,
        MOBimg_Bdr_Unit,
        MOBimgWidth_Unit,
        ratingColor,
        ratingPosition,
        imageOverlayColor,
        enableQuote,
        layoutPreset,
        imgWidth_Range: sideImgWidth,
        imgWidth_Unit: sideImgUnit,
        TABimgWidth_Range: tabSideImgWidth,
        TABimgWidth_Unit: tabSideImgUnit,
        MOBimgWidth_Range: mobSideImgWidth,
        MOBimgWidth_Unit: mobSideImgUnit,
    } = attributes;

    // Unset numeric attributes used to leak into the CSS as "undefined".
    const num = (v) => (v === undefined || v === null || v === "" ? 0 : v);
    const has = (v) => v !== undefined && v !== null && v !== "";

    // Size of the layout-preset-2 offset circle: avatar size minus its borders.
    // Desktop falls back to the 55px avatar size set in style.scss.
    const presetTwoBefore = (range, unit, top, right, bottom, left, bdrUnit) => {
        const u = unit || "px";
        const bu = bdrUnit || "px";
        return `width: calc(${range}${u} - (${num(left)}${bu} + ${num(right)}${bu}));
            height: calc(${range}${u} - (${num(top)}${bu} + ${num(bottom)}${bu}));`;
    };

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
        transitionStyle: bdShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: WrpBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    const {
        styesDesktop: imgShadowStyesDesktop,
        styesTab: imgShadowStyesTab,
        styesMobile: imgShadowStyesMobile,
        stylesHoverDesktop: imgShadowStylesHoverDesktop,
        stylesHoverTab: imgShadowStylesHoverTab,
        stylesHoverMobile: imgShadowStylesHoverMobile,
        transitionStyle: imgShadowTransitionStyle,
    } = generateBorderShadowStyles({
        controlName: ImgBdShadow,
        attributes,
        // noShadow: true,
        // noBorder: true,
    });

    // responsive range controller
    const {
        rangeStylesDesktop: ratingSizeStylesDesktop,
        rangeStylesTab: ratingSizeStylesTab,
        rangeStylesMobile: ratingSizeStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: RATING_SIZE,
        property: "font-size",
        attributes,
    });
    const {
        rangeStylesDesktop: quoteHeightStylesDesktop,
        rangeStylesTab: quoteHeightStylesTab,
        rangeStylesMobile: quoteHeightStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: QUOTE_SIZE,
        property: "height",
        attributes,
    });
    const {
        rangeStylesDesktop: quoteWidthStylesDesktop,
        rangeStylesTab: quoteWidthStylesTab,
        rangeStylesMobile: quoteWidthStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: QUOTE_SIZE,
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: imgWidthStylesDesktop,
        rangeStylesTab: imgWidthStylesTab,
        rangeStylesMobile: imgWidthStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMG_WIDTH,
        property: "width",
        attributes,
    });
    const {
        rangeStylesDesktop: imgGapStylesDesktop,
        rangeStylesTab: imgGapStylesTab,
        rangeStylesMobile: imgGapStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMG_GAP,
        property: "gap",
        attributes,
    });
    const {
        rangeStylesDesktop: sideGapStylesDesktop,
        rangeStylesTab: sideGapStylesTab,
        rangeStylesMobile: sideGapStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMG_GAP,
        property: "column-gap",
        attributes,
    });
    const {
        rangeStylesDesktop: imgHeightStylesDesktop,
        rangeStylesTab: imgHeightStylesTab,
        rangeStylesMobile: imgHeightStylesMobile,
    } = generateResponsiveRangeStyles({
        controlName: IMG_WIDTH,
        property: "height",
        attributes,
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
        bgTransitionStyle,
        ovlTransitionStyle,
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
			transition:${bgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-testimonial-wrapper.${blockId}:hover{
			${hoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}

		.eb-testimonial-wrapper.${blockId}:before{
			${overlayStylesDesktop}
			transition:${ovlTransitionStyle};
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
        .${blockId} .eb-avatar-container {
            ${imgGapStylesDesktop}
        }
		.${blockId} .image-container {
			order: ${imagePosition};
			display: ${displayAvatar ? "block" : "none"};
		}
		.${blockId} .eb-avatar-style,
        .eb-testimonial-wrapper.${blockId}.layout-preset-2 .image-container .eb-avatar-style {
			${imageUrl ? `background-image: url("${imageUrl}");` : ""}
			border-radius: ${borderRadius}%;
			display: ${imageUrl ? "block" : "none"};
            ${imgWidthStylesDesktop}
            ${imgHeightStylesDesktop}
            ${imgShadowStyesDesktop}
		}

        .${blockId}.layout-preset-2 .image-container::before,
        .${blockId}.layout-preset-2 .image-container .eb-avatar-style {
            ${imgWidthStylesDesktop}
            ${imgHeightStylesDesktop}
        }

        .${blockId}.layout-preset-2 .image-container::before {
            ${presetTwoBefore(
        has(imgWidth_Range) ? imgWidth_Range : 55,
        has(imgWidth_Range) ? imgWidth_Unit : "px",
        img_Bdr_Top, img_Bdr_Right, img_Bdr_Bottom, img_Bdr_Left, img_Bdr_Unit
    )}
            background-color: ${imageOverlayColor};
        }

	`;
    const imageContainerStyleTab = `
        .${blockId} .eb-avatar-container {
            ${imgGapStylesTab}
        }
		.${blockId} .eb-avatar-style,
        .eb-testimonial-wrapper.${blockId}.layout-preset-2 .image-container .eb-avatar-style {
            ${imgWidthStylesTab}
            ${imgHeightStylesTab}
            ${imgShadowStyesTab}
		}

        ${(has(TABimgWidth_Range) || has(TABimg_Bdr_Top) || has(TABimg_Bdr_Right) || has(TABimg_Bdr_Bottom) || has(TABimg_Bdr_Left))
            ? `.${blockId}.layout-preset-2 .image-container::before {
            ${presetTwoBefore(
                has(TABimgWidth_Range) ? TABimgWidth_Range : has(imgWidth_Range) ? imgWidth_Range : 55,
                has(TABimgWidth_Range) ? TABimgWidth_Unit : has(imgWidth_Range) ? imgWidth_Unit : "px",
                has(TABimg_Bdr_Top) ? TABimg_Bdr_Top : img_Bdr_Top,
                has(TABimg_Bdr_Right) ? TABimg_Bdr_Right : img_Bdr_Right,
                has(TABimg_Bdr_Bottom) ? TABimg_Bdr_Bottom : img_Bdr_Bottom,
                has(TABimg_Bdr_Left) ? TABimg_Bdr_Left : img_Bdr_Left,
                TABimg_Bdr_Unit || img_Bdr_Unit
            )}
        }`
            : ""
        }

	`;
    const imageContainerStyleMobile = `
        .${blockId} .eb-avatar-container {
            ${imgGapStylesMobile}
        }
		.${blockId} .eb-avatar-style,
        .eb-testimonial-wrapper.${blockId}.layout-preset-2 .image-container .eb-avatar-style {
            ${imgWidthStylesMobile}
            ${imgHeightStylesMobile}
            ${imgShadowStyesMobile}
		}
        ${(has(MOBimgWidth_Range) || has(MOBimg_Bdr_Top) || has(MOBimg_Bdr_Right) || has(MOBimg_Bdr_Bottom) || has(MOBimg_Bdr_Left))
            ? `.${blockId}.layout-preset-2 .image-container::before {
            ${presetTwoBefore(
                has(MOBimgWidth_Range) ? MOBimgWidth_Range : has(imgWidth_Range) ? imgWidth_Range : 55,
                has(MOBimgWidth_Range) ? MOBimgWidth_Unit : has(imgWidth_Range) ? imgWidth_Unit : "px",
                has(MOBimg_Bdr_Top) ? MOBimg_Bdr_Top : img_Bdr_Top,
                has(MOBimg_Bdr_Right) ? MOBimg_Bdr_Right : img_Bdr_Right,
                has(MOBimg_Bdr_Bottom) ? MOBimg_Bdr_Bottom : img_Bdr_Bottom,
                has(MOBimg_Bdr_Left) ? MOBimg_Bdr_Left : img_Bdr_Left,
                MOBimg_Bdr_Unit || img_Bdr_Unit
            )}
        }`
            : ""
        }

	`;

    /**
     * Style 4 (side image): the Width control sets the image column, Gap the
     * space beside it. Grid layout and mobile stacking live in style.scss.
     */
    const isSideImage = layoutPreset === "layout-preset-4";
    const sideCols = (range, unit) => `${range}${unit || "%"} minmax(0, 1fr)`;
    // Description Position: Top (1) puts the description above the user info.
    const descFirst = avatarOrder !== 0;
    // User Info Align moves the text block (description + user info) to the
    // top, middle or bottom of the image column via two flexible spacer rows.
    const [spaceTop, spaceBottom] =
        { "flex-start": ["0", "1fr"], center: ["1fr", "1fr"], "flex-end": ["1fr", "0"] }[userInfoAlign] || ["0", "1fr"];
    const sideTextOrder = `
        .eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-description-container {
            grid-row: ${descFirst ? 2 : 3};
            order: ${descFirst ? 1 : 2};
            margin-bottom: ${descFirst ? "30px" : "0"};
        }
        .eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-userinfo-container {
            grid-row: ${descFirst ? 3 : 2};
            order: ${descFirst ? 2 : 1};
            margin-bottom: ${descFirst ? "0" : "30px"};
        }`;
    const sideImageStyle = !isSideImage
        ? ""
        : displayAvatar
            ? `.eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-testimonial-container {
                grid-template-columns: ${sideCols(has(sideImgWidth) ? sideImgWidth : 40, has(sideImgWidth) ? sideImgUnit : "%")};
                grid-template-rows: ${spaceTop} auto auto ${spaceBottom};
                ${sideGapStylesDesktop}
            }
            ${sideTextOrder}`
            : `.eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-testimonial-container {
                display: flex;
                flex-direction: column;
            }
            ${sideTextOrder}`;
    const sideImageStyleTab = isSideImage && displayAvatar
        ? `.eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-testimonial-container {
            ${has(tabSideImgWidth) ? `grid-template-columns: ${sideCols(tabSideImgWidth, tabSideImgUnit)};` : ""}
            ${sideGapStylesTab}
        }`
        : "";
    // Phones stack everything with a flex gap, so drop the desktop margins.
    const sideImageStyleMobile = !isSideImage
        ? ""
        : `${displayAvatar
            ? `.eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-testimonial-container {
            ${has(mobSideImgWidth) ? `grid-template-columns: ${sideCols(mobSideImgWidth, mobSideImgUnit)};` : ""}
            ${sideGapStylesMobile}
        }`
            : ""}
        .eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-description-container,
        .eb-testimonial-wrapper.${blockId}.layout-preset-4 .eb-userinfo-container {
            margin-bottom: 0;
        }`;

    const userInfoStyle = `
		.${blockId} .eb-userinfo-container {
			text-align: ${textAlign};
			justify-content: ${userInfoPos};
			align-self: ${userInfoAlign};
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

    const ratingStyleDesktop = `
        .${blockId} .eb-testimonial-rating {
            text-align: ${descTextAlign};
        }

        ${ratingPosition === 2
            ? `.${blockId} .eb-testimonial-rating {
                    order: 2;
                }
                .${blockId} .eb-testimonial-description {
                    order: 3;
                }`
            : ``
        }
        ${ratingPosition === 3
            ? `.${blockId} .eb-testimonial-rating {
                    order: ${ratingPosition};
                }
                .${blockId} .eb-testimonial-description {
                    order: 2;
                }`
            : ``
        }


        .${blockId} .eb-testimonial-rating i {
            ${ratingSizeStylesDesktop}
        }
        .${blockId} .eb-testimonial-rating.rating-1 i:nth-child(-n+1),
		.${blockId} .eb-testimonial-rating.rating-2 i:nth-child(-n+2),
		.${blockId} .eb-testimonial-rating.rating-3 i:nth-child(-n+3),
		.${blockId} .eb-testimonial-rating.rating-4 i:nth-child(-n+4),
		.${blockId} .eb-testimonial-rating.rating-5 i:nth-child(-n+5) {
			color: ${ratingColor};
		}
	`;
    const ratingStyleTab = `
        .${blockId} .eb-testimonial-rating i {
            ${ratingSizeStylesTab}
        }
	`;
    const ratingStyleMobile = `
        .${blockId} .eb-testimonial-rating i {
            ${ratingSizeStylesMobile}
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
			text-align: ${descTextAlign};
			color: ${descriptionColor};
			${enableQuote && quoteHorizontalPosition !== "center" ? "padding-right: 20px;" : ""}
			word-break: break-word;
		}
		${quoteHorizontalPosition === "flex-end"
            ? `.${blockId} .eb-description-container {
				flex-direction: row-reverse;
			}
			.${blockId} .eb-description-container .eb-testimonial-quote-style {
				transform: rotateY(180deg);
			}`
            : quoteHorizontalPosition === "center"
                ? quoteVerticalPosition == 1
                    ? `.${blockId} .eb-description-container {
						flex-direction: column;
					}`
                    : `.${blockId} .eb-description-container {
						flex-direction: column-reverse;
					}`
                : `.${blockId} .eb-description-container {
					flex-direction: row;
				}`
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
			${enableQuote && quoteHorizontalPosition !== "center" ? "padding-right: 0;" : ""}
		}
		${enableQuote && quoteHorizontalPosition !== "center"
            ? `.${blockId} .eb-description-container {
				flex-direction: column;
			}
			.${blockId} .eb-description-container .eb-testimonial-quote-style {
				align-self: ${quoteHorizontalPosition === "flex-end" ? "flex-end" : "flex-start"};
			}`
            : ""
        }
	`;

    const quoteStyle = `
		.${blockId} .eb-testimonial-quote-style:before {
			content: none;
		}
		.${blockId} .eb-testimonial-quote-style svg {
			fill: ${quoteColor};
			${quoteHeightStylesDesktop}
			${quoteWidthStylesDesktop}
		}
	`;

    const quoteStyleTab = `
		.${blockId} .eb-testimonial-quote-style svg {
			${quoteHeightStylesTab}
			${quoteWidthStylesTab}
		}
	`;

    const quoteStyleMobile = `
		.${blockId} .eb-testimonial-quote-style svg {
			${quoteHeightStylesMobile}
			${quoteWidthStylesMobile}
		}
	`;

    const desktopAllStyles = softMinifyCssStrings(`
		${containerStyle}
		${avatarContainerStyle}
		${imageContainerStyle}
		${userInfoStyle}
		${userNameStyle}
		${companyNameStyle}
		${descriptionStyle}
		${quoteStyle}
		${ratingStyleDesktop}
		${sideImageStyle}
	`);

    const tabAllStyles = softMinifyCssStrings(`
		${tabContainerStyle}
		${userNameStyleTab}
		${companyNameStyleTab}
		${descriptionStyleTab}
		${quoteStyleTab}
        ${imageContainerStyleTab}
        ${ratingStyleTab}
        ${sideImageStyleTab}
	`);

    const mobileAllStyles = softMinifyCssStrings(`
		${mobContainerStyle}
		${userNameStyleMobile}
		${companyNameStyleMobile}
		${descriptionStyleMobile}
		${quoteStyleMobile}
        ${imageContainerStyleMobile}
        ${ratingStyleMobile}
        ${sideImageStyleMobile}
	`);

    return (
        <>
            <StyleComponent
                attributes={attributes}
                setAttributes={setAttributes}
                desktopAllStyles={desktopAllStyles}
                tabAllStyles={tabAllStyles}
                mobileAllStyles={mobileAllStyles}
                blockName={name}
            />
        </>
    );
}
