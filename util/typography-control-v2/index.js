const { __ } = wp.i18n;
const {
  BaseControl,
  Button,
  Dropdown,
  RangeControl,
  SelectControl,
} = wp.components;

import UnitControl from "./unit-control";
import FontPicker from "./FontPicker";
import TypographyIcon from "./Icon";
import WithResButtons from "./WithResButtons";
import {
  sizeUnitTypes,
  optionsFontWeights,
  optionsTextTransforms,
  optionsTextDecorations,
  optionsLhLsp,
} from "./constants";

function TypographyDropdown({
  baseLabel,
  typographyPrefixConstant,
  resRequiredProps,
}) {
  const { attributes, setAttributes, resOption } = resRequiredProps;

  const {
    [`${typographyPrefixConstant}FontFamily`]: fontFamily,
    [`${typographyPrefixConstant}FontWeight`]: fontWeight,
    [`${typographyPrefixConstant}TextTransform`]: textTransform,
    [`${typographyPrefixConstant}TextDecoration`]: textDecoration,
    [`${typographyPrefixConstant}FontSize`]: fontSize,
    [`${typographyPrefixConstant}SizeUnit`]: sizeUnit,
    [`${typographyPrefixConstant}LetterSpacing`]: letterSpacing,
    [`${typographyPrefixConstant}LetterSpacingUnit`]: letterSpacingUnit,
    [`${typographyPrefixConstant}LineHeight`]: lineHeight,
    [`${typographyPrefixConstant}LineHeightUnit`]: lineHeightUnit,

    [`TAB${typographyPrefixConstant}SizeUnit`]: TABsizeUnit,
    [`TAB${typographyPrefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
    [`TAB${typographyPrefixConstant}LineHeightUnit`]: TABlineHeightUnit,
    [`TAB${typographyPrefixConstant}FontSize`]: TABfontSize,
    [`TAB${typographyPrefixConstant}LetterSpacing`]: TABletterSpacing,
    [`TAB${typographyPrefixConstant}LineHeight`]: TABlineHeight,

    [`MOB${typographyPrefixConstant}SizeUnit`]: MOBsizeUnit,
    [`MOB${typographyPrefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
    [`MOB${typographyPrefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
    [`MOB${typographyPrefixConstant}FontSize`]: MOBfontSize,
    [`MOB${typographyPrefixConstant}LetterSpacing`]: MOBletterSpacing,
    [`MOB${typographyPrefixConstant}LineHeight`]: MOBlineHeight,
  } = attributes;

  return (
    <BaseControl label={__(baseLabel)} className="eb-typography-base">
      <Dropdown
        className="eb-typography-dropdown"
        contentClassName="my-popover-content-classname"
        position="bottom right"
        renderToggle={({ isOpen, onToggle }) => (
          <Button isSmall onClick={onToggle} aria-expanded={isOpen}>
            <TypographyIcon />
          </Button>
        )}
        renderContent={() => (
          <div
            className="eb-panel-control eb-typography-component-panel"
            style={{ padding: "0.2rem" }}
          >
            <FontPicker
              label={__("Font Family")}
              value={fontFamily}
              onChange={(FontFamily) => {
                setAttributes({
                  [`${typographyPrefixConstant}FontFamily`]: FontFamily,
                });
              }}
            />

            <WithResButtons
              className="forFontSize"
              resOption={resOption}
              setAttributes={setAttributes}
            >
              {resOption === "Desktop" && (
                <>
                  <UnitControl
                    selectedUnit={sizeUnit}
                    unitTypes={sizeUnitTypes}
                    onClick={(sizeUnit) =>
                      setAttributes({
                        [`${typographyPrefixConstant}SizeUnit`]: sizeUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Font Size")}
                    value={fontSize}
                    onChange={(FontSize) =>
                      setAttributes({
                        [`${typographyPrefixConstant}FontSize`]: FontSize,
                      })
                    }
                    step={sizeUnit === "em" ? 0.1 : 1}
                    min={0}
                    max={sizeUnit === "em" ? 10 : 300}
                  />
                </>
              )}

              {resOption === "Tablet" && (
                <>
                  <UnitControl
                    selectedUnit={TABsizeUnit}
                    unitTypes={sizeUnitTypes}
                    onClick={(TABsizeUnit) =>
                      setAttributes({
                        [`TAB${typographyPrefixConstant}SizeUnit`]: TABsizeUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Font Size")}
                    value={TABfontSize}
                    onChange={(FontSize) =>
                      setAttributes({
                        [`TAB${typographyPrefixConstant}FontSize`]: FontSize,
                      })
                    }
                    step={TABsizeUnit === "em" ? 0.1 : 1}
                    min={0}
                    max={TABsizeUnit === "em" ? 10 : 300}
                  />
                </>
              )}

              {resOption === "Mobile" && (
                <>
                  <UnitControl
                    selectedUnit={MOBsizeUnit}
                    unitTypes={sizeUnitTypes}
                    onClick={(MOBsizeUnit) =>
                      setAttributes({
                        [`MOB${typographyPrefixConstant}SizeUnit`]: MOBsizeUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Font Size")}
                    value={MOBfontSize}
                    onChange={(FontSize) =>
                      setAttributes({
                        [`MOB${typographyPrefixConstant}FontSize`]: FontSize,
                      })
                    }
                    step={MOBsizeUnit === "em" ? 0.1 : 1}
                    min={0}
                    max={MOBsizeUnit === "em" ? 10 : 300}
                  />
                </>
              )}
            </WithResButtons>

            <SelectControl
              label={__("Font Weight")}
              value={fontWeight}
              options={optionsFontWeights}
              onChange={(FontWeight) =>
                setAttributes({
                  [`${typographyPrefixConstant}FontWeight`]: FontWeight,
                })
              }
            />

            <SelectControl
              label={__("Text Transform")}
              value={textTransform}
              options={optionsTextTransforms}
              onChange={(TextTransform) =>
                setAttributes({
                  [`${typographyPrefixConstant}TextTransform`]: TextTransform,
                })
              }
            />

            <SelectControl
              label={__("Text Decoration")}
              value={textDecoration}
              options={optionsTextDecorations}
              onChange={(TextDecoration) =>
                setAttributes({
                  [`${typographyPrefixConstant}TextDecoration`]: TextDecoration,
                })
              }
            />

            <WithResButtons
              className="forLetterSpacing"
              resOption={resOption}
              setAttributes={setAttributes}
            >
              {resOption === "Desktop" && (
                <>
                  <UnitControl
                    selectedUnit={letterSpacingUnit}
                    unitTypes={optionsLhLsp}
                    onClick={(LetterSpacingUnit) =>
                      setAttributes({
                        [`${typographyPrefixConstant}LetterSpacingUnit`]: LetterSpacingUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Letter Spacing")}
                    value={letterSpacing}
                    onChange={(LetterSpacing) =>
                      setAttributes({
                        [`${typographyPrefixConstant}LetterSpacing`]: LetterSpacing,
                      })
                    }
                    min={0}
                    max={letterSpacingUnit === "em" ? 10 : 100}
                    step={letterSpacingUnit === "em" ? 0.1 : 1}
                  />
                </>
              )}

              {resOption === "Tablet" && (
                <>
                  <UnitControl
                    selectedUnit={TABletterSpacingUnit}
                    unitTypes={optionsLhLsp}
                    onClick={(TABletterSpacingUnit) =>
                      setAttributes({
                        [`TAB${typographyPrefixConstant}LetterSpacingUnit`]: TABletterSpacingUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Letter Spacing")}
                    value={TABletterSpacing}
                    onChange={(LetterSpacing) =>
                      setAttributes({
                        [`TAB${typographyPrefixConstant}LetterSpacing`]: LetterSpacing,
                      })
                    }
                    min={0}
                    max={TABletterSpacingUnit === "em" ? 10 : 100}
                    step={TABletterSpacingUnit === "em" ? 0.1 : 1}
                  />
                </>
              )}

              {resOption === "Mobile" && (
                <>
                  <UnitControl
                    selectedUnit={MOBletterSpacingUnit}
                    unitTypes={optionsLhLsp}
                    onClick={(MOBletterSpacingUnit) =>
                      setAttributes({
                        [`MOB${typographyPrefixConstant}LetterSpacingUnit`]: MOBletterSpacingUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Letter Spacing")}
                    value={MOBletterSpacing}
                    onChange={(LetterSpacing) =>
                      setAttributes({
                        [`MOB${typographyPrefixConstant}LetterSpacing`]: LetterSpacing,
                      })
                    }
                    min={0}
                    max={MOBletterSpacingUnit === "em" ? 10 : 100}
                    step={MOBletterSpacingUnit === "em" ? 0.1 : 1}
                  />
                </>
              )}
            </WithResButtons>

            <WithResButtons
              className="forLineHeight"
              resOption={resOption}
              setAttributes={setAttributes}
            >
              {resOption === "Desktop" && (
                <>
                  <UnitControl
                    selectedUnit={lineHeightUnit}
                    unitTypes={optionsLhLsp}
                    onClick={(LineHeightUnit) =>
                      setAttributes({
                        [`${typographyPrefixConstant}LineHeightUnit`]: LineHeightUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Line Height")}
                    value={lineHeight}
                    onChange={(LineHeight) =>
                      setAttributes({
                        [`${typographyPrefixConstant}LineHeight`]: LineHeight,
                      })
                    }
                    min={0}
                    max={lineHeightUnit === "em" ? 10 : 600}
                    step={lineHeightUnit === "em" ? 0.1 : 1}
                  />
                </>
              )}

              {resOption === "Tablet" && (
                <>
                  <UnitControl
                    selectedUnit={TABlineHeightUnit}
                    unitTypes={optionsLhLsp}
                    onClick={(TABlineHeightUnit) =>
                      setAttributes({
                        [`TAB${typographyPrefixConstant}LineHeightUnit`]: TABlineHeightUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Line Height")}
                    value={TABlineHeight}
                    onChange={(LineHeight) =>
                      setAttributes({
                        [`TAB${typographyPrefixConstant}LineHeight`]: LineHeight,
                      })
                    }
                    min={0}
                    max={TABlineHeightUnit === "em" ? 10 : 600}
                    step={TABlineHeightUnit === "em" ? 0.1 : 1}
                  />
                </>
              )}

              {resOption === "Mobile" && (
                <>
                  <UnitControl
                    selectedUnit={MOBlineHeightUnit}
                    unitTypes={optionsLhLsp}
                    onClick={(MOBlineHeightUnit) =>
                      setAttributes({
                        [`MOB${typographyPrefixConstant}LineHeightUnit`]: MOBlineHeightUnit,
                      })
                    }
                  />
                  <RangeControl
                    label={__("Line Height")}
                    value={MOBlineHeight}
                    onChange={(LineHeight) =>
                      setAttributes({
                        [`MOB${typographyPrefixConstant}LineHeight`]: LineHeight,
                      })
                    }
                    min={0}
                    max={MOBlineHeightUnit === "em" ? 10 : 600}
                    step={MOBlineHeightUnit === "em" ? 0.1 : 1}
                  />
                </>
              )}
            </WithResButtons>
          </div>
        )}
      />
    </BaseControl>
  );
}

export default TypographyDropdown;
