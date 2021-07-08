/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
  ToggleControl,
  TextControl,
  Button,
  RangeControl,
  BaseControl,
  ButtonGroup,
  SelectControl,
  Dropdown,
} = wp.components;

/**
 * Internal dependencies
 */

import ColorControl from "../color-control";
import ResetControl from "../reset-control";
import ResponsiveDimensionsControl from "../dimensions-control-v2";
import TypographyIcon from "../typography-control-v2/Icon";

export default function BorderShadowControl({
  resRequiredProps,
  controlName,
  noBorder,
  noShadow,
}) {
  const { setAttributes, attributes } = resRequiredProps;

  const {
    [`${controlName}borderStyle`]: borderStyle,
    [`${controlName}borderColor`]: borderColor,
    [`${controlName}shadowType`]: shadowType,
    [`${controlName}shadowColor`]: shadowColor,
    [`${controlName}hOffset`]: hOffset,
    [`${controlName}vOffset`]: vOffset,
    [`${controlName}blur`]: blur,
    [`${controlName}spread`]: spread,
    [`${controlName}hoverShadowColor`]: hoverShadowColor,
    [`${controlName}hoverHOffset`]: hoverHOffset,
    [`${controlName}hoverVOffset`]: hoverVOffset,
    [`${controlName}hoverBlur`]: hoverBlur,
    [`${controlName}hoverSpread`]: hoverSpread,
    [`${controlName}inset`]: inset,

    [`${controlName}BorderType`]: BorderType,
    [`${controlName}HborderStyle`]: HborderStyle,
    [`${controlName}HborderColor`]: HborderColor,

    [`${controlName}borderTransition`]: borderTransition,
    [`${controlName}radiusTransition`]: radiusTransition,
    [`${controlName}shadowTransition`]: shadowTransition,
  } = attributes;

  return (
    <>
      {noBorder !== true && (
        <>
          <BaseControl id="eb-infobox-border-hover-ptions">
            <ButtonGroup id="eb-infobox-border-hover-ptions">
              {[
                { label: "Normal", value: "normal" },
                { label: "Hover", value: "hover" },
              ].map(({ value, label }) => (
                <Button
                  isLarge
                  isSecondary={BorderType !== value}
                  isPrimary={BorderType === value}
                  onClick={() =>
                    setAttributes({ [`${controlName}BorderType`]: value })
                  }
                >
                  {label}
                </Button>
              ))}
            </ButtonGroup>
          </BaseControl>

          {BorderType === "normal" && (
            <>
              <SelectControl
                label={__("Border Style")}
                value={borderStyle}
                options={[
                  { label: __("None"), value: "none" },
                  { label: __("Dashed"), value: "dashed" },
                  { label: __("Solid"), value: "solid" },
                  { label: __("Dotted"), value: "dotted" },
                  { label: __("Double"), value: "double" },
                  { label: __("Groove"), value: "groove" },
                  { label: __("Inset"), value: "inset" },
                  { label: __("Outset"), value: "outset" },
                  { label: __("Ridge"), value: "ridge" },
                ]}
                onChange={(borderStyle) =>
                  setAttributes({
                    [`${controlName}borderStyle`]: borderStyle,
                  })
                }
              />

              {borderStyle !== "none" && (
                <>
                  <ColorControl
                    label={__("Border Color")}
                    color={borderColor}
                    onChange={(borderColor) =>
                      setAttributes({
                        [`${controlName}borderColor`]: borderColor,
                      })
                    }
                  />

                  <ResponsiveDimensionsControl
                    resRequiredProps={resRequiredProps}
                    controlName={`${controlName}Bdr_`}
                    baseLabel="Border Width"
                  />
                </>
              )}

              <ResponsiveDimensionsControl
                forBorderRadius
                resRequiredProps={resRequiredProps}
                controlName={`${controlName}Rds_`}
                baseLabel="Border Radius"
              />
            </>
          )}

          {BorderType === "hover" && (
            <>
              <SelectControl
                label={__("Border Style")}
                value={HborderStyle}
                options={[
                  { label: __("None"), value: "none" },
                  { label: __("Dashed"), value: "dashed" },
                  { label: __("Solid"), value: "solid" },
                  { label: __("Dotted"), value: "dotted" },
                  { label: __("Double"), value: "double" },
                  { label: __("Groove"), value: "groove" },
                  { label: __("Inset"), value: "inset" },
                  { label: __("Outset"), value: "outset" },
                  { label: __("Ridge"), value: "ridge" },
                ]}
                onChange={(HborderStyle) =>
                  setAttributes({
                    [`${controlName}HborderStyle`]: HborderStyle,
                  })
                }
              />

              {HborderStyle !== "none" && (
                <>
                  <ColorControl
                    label={__("Border Color")}
                    color={HborderColor}
                    onChange={(HborderColor) =>
                      setAttributes({
                        [`${controlName}HborderColor`]: HborderColor,
                      })
                    }
                  />

                  <ResponsiveDimensionsControl
                    resRequiredProps={resRequiredProps}
                    controlName={`${controlName}HBdr_`}
                    baseLabel="Border Width"
                  />

                  <RangeControl
                    label={__("Border Transition")}
                    value={borderTransition}
                    onChange={(borderTransition) =>
                      setAttributes({
                        [`${controlName}borderTransition`]: borderTransition,
                      })
                    }
                    step={0.01}
                    min={0}
                    max={5}
                  />
                </>
              )}

              <ResponsiveDimensionsControl
                forBorderRadius
                resRequiredProps={resRequiredProps}
                controlName={`${controlName}HRds_`}
                baseLabel="Border Radius"
              />

              <RangeControl
                label={__("Border Radius Transition")}
                value={radiusTransition}
                onChange={(radiusTransition) =>
                  setAttributes({
                    [`${controlName}radiusTransition`]: radiusTransition,
                  })
                }
                step={0.01}
                min={0}
                max={5}
              />
            </>
          )}
        </>
      )}

      {noShadow !== true && (
        <>
          <BaseControl label={__("Box Shadow")} className="eb-typography-base">
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
                <>
                  <div
                    className="eb-panel-control"
                    style={{ minWidth: "230px", padding: "10px" }}
                  >
                    <BaseControl id="eb-infobox-shadow-hover-ptions">
                      <ButtonGroup id="eb-infobox-shadow-hover-ptions">
                        {[
                          { label: "Normal", value: "normal" },
                          { label: "Hover", value: "hover" },
                        ].map(({ value, label }) => (
                          <Button
                            isLarge
                            isSecondary={shadowType !== value}
                            isPrimary={shadowType === value}
                            onClick={() =>
                              setAttributes({
                                [`${controlName}shadowType`]: value,
                              })
                            }
                          >
                            {label}
                          </Button>
                        ))}
                      </ButtonGroup>
                    </BaseControl>

                    <ToggleControl
                      label={__("Inset")}
                      checked={inset}
                      onChange={() =>
                        setAttributes({ [`${controlName}inset`]: !inset })
                      }
                    />

                    {shadowType === "normal" && (
                      <>
                        <ColorControl
                          label={__("Shadow Color")}
                          color={shadowColor}
                          onChange={(shadowColor) =>
                            setAttributes({
                              [`${controlName}shadowColor`]: shadowColor,
                            })
                          }
                        />

                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              [`${controlName}hOffset`]: undefined,
                            })
                          }
                        >
                          <RangeControl
                            label={__("Horizontal Offset")}
                            value={hOffset}
                            onChange={(hOffset) =>
                              setAttributes({
                                [`${controlName}hOffset`]: hOffset,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>

                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              [`${controlName}vOffset`]: undefined,
                            })
                          }
                        >
                          <RangeControl
                            label={__("Vertical Offset")}
                            value={vOffset}
                            onChange={(vOffset) =>
                              setAttributes({
                                [`${controlName}vOffset`]: vOffset,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>

                        <ResetControl
                          onReset={() =>
                            setAttributes({ [`${controlName}blur`]: undefined })
                          }
                        >
                          <RangeControl
                            label={__("Shadow Blur")}
                            value={blur}
                            onChange={(blur) =>
                              setAttributes({
                                [`${controlName}blur`]: blur,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>

                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              [`${controlName}spread`]: undefined,
                            })
                          }
                        >
                          <RangeControl
                            label={__("Shadow Spread")}
                            value={spread}
                            onChange={(spread) =>
                              setAttributes({
                                [`${controlName}spread`]: spread,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>
                      </>
                    )}

                    {shadowType === "hover" && (
                      <>
                        <ColorControl
                          label={__("Hover Shadow Color")}
                          color={hoverShadowColor}
                          onChange={(hoverShadowColor) =>
                            setAttributes({
                              [`${controlName}hoverShadowColor`]:
                                hoverShadowColor,
                            })
                          }
                        />

                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              [`${controlName}hoverHOffset`]: undefined,
                            })
                          }
                        >
                          <RangeControl
                            label={__("Horizontal Offset")}
                            value={hoverHOffset}
                            onChange={(hoverHOffset) =>
                              setAttributes({
                                [`${controlName}hoverHOffset`]: hoverHOffset,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>

                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              [`${controlName}hoverVOffset`]: undefined,
                            })
                          }
                        >
                          <RangeControl
                            label={__("Vertical Offset")}
                            value={hoverVOffset}
                            onChange={(hoverVOffset) =>
                              setAttributes({
                                [`${controlName}hoverVOffset`]: hoverVOffset,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>

                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              [`${controlName}hoverBlur`]: undefined,
                            })
                          }
                        >
                          <RangeControl
                            label={__("Shadow Blur")}
                            value={hoverBlur}
                            onChange={(hoverBlur) =>
                              setAttributes({
                                [`${controlName}hoverBlur`]: hoverBlur,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>

                        <ResetControl
                          onReset={() =>
                            setAttributes({
                              [`${controlName}hoverSpread`]: undefined,
                            })
                          }
                        >
                          <RangeControl
                            label={__("Shadow Spread")}
                            value={hoverSpread}
                            onChange={(hoverSpread) =>
                              setAttributes({
                                [`${controlName}hoverSpread`]: hoverSpread,
                              })
                            }
                            min={0}
                            max={20}
                          />
                        </ResetControl>

                        <RangeControl
                          label={__("Shadow Transition")}
                          value={shadowTransition}
                          onChange={(shadowTransition) =>
                            setAttributes({
                              [`${controlName}shadowTransition`]:
                                shadowTransition,
                            })
                          }
                          step={0.01}
                          min={0}
                          max={5}
                        />
                      </>
                    )}
                  </div>
                </>
              )}
            />
          </BaseControl>
        </>
      )}
    </>
  );
}
