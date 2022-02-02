// import "../controls/src/backend-css";

//Export All Controls
// export { default as ColorControl } from "../controls/src/controls/color-control";
// export { default as CustomQuery } from "../controls/src/controls/custom-query";
// export { default as MorePosts } from "../controls/src/controls/custom-query/more-posts";
// export { default as GradientColorControl } from "../controls/src/controls/gradient-color-controller";
// export { default as ImageAvatar } from "../controls/src/controls/image-avatar";
// export { default as ResetControl } from "../controls/src/controls/reset-control";
// export { default as WithResBtns } from "../controls/src/controls/responsive-range-control/responsive-btn";
// export { default as DealSocialProfiles } from "../controls/src/controls/social-profiles-v2/DealSocialProfiles";
// export { default as UnitControl } from "../controls/src/controls/unit-control";
// export { default as faIcons } from "../controls/src/extras/faIcons";
// export * from "../controls/src/extras/icons";
const BackgroundControl = require("../controls/src/controls/background-control");
const BorderShadowControl = require("../controls/src/controls/border-shadow-control");
const ResponsiveDimensionsControl = require("../controls/src/controls/dimensions-control-v2");
const ResponsiveRangeController = require("../controls/src/controls/responsive-range-control");
const ToggleButton = require("../controls/src/controls/toggle-button");
const TypographyDropdown = require("../controls/src/controls/typography-control-v2");

//Export Helper Functions
const {
    mimmikCssForResBtns,
    mimmikCssOnPreviewBtnClickWhileBlockSelected,
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateTypographyStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    mimmikCssForPreviewBtnClick,
    duplicateBlockIdFix,
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
    textInsideForEdit,
    getFlipTransform,
    ebConditionalRegisterBlockType
} = require("../controls/src/helpers");

return (
    BackgroundControl,
    BorderShadowControl,
    ResponsiveDimensionsControl,
    ResponsiveRangeController,
    ToggleButton,
    TypographyDropdown,
    mimmikCssForResBtns,
    mimmikCssOnPreviewBtnClickWhileBlockSelected,
    softMinifyCssStrings,
    generateBackgroundControlStyles,
    generateDimensionsControlStyles,
    generateTypographyStyles,
    generateBorderShadowStyles,
    generateResponsiveRangeStyles,
    mimmikCssForPreviewBtnClick,
    duplicateBlockIdFix,
    generateDimensionsAttributes,
    generateTypographyAttributes,
    generateBackgroundAttributes,
    generateBorderShadowAttributes,
    generateResponsiveRangeAttributes,
    textInsideForEdit,
    getFlipTransform,
    ebConditionalRegisterBlockType
)