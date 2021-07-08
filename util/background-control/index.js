/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { ToggleControl } = wp.components;

/**
 * Internal dependencies
 */
import OverlayControl from "./overlayControl";
import BgControl from "./bgControl";

export default function BackgroundControl({
  resRequiredProps,
  controlName,
  noOverlay = false,
  noMainBgi = false,
  noOverlayBgi = false,
}) {
  const { setAttributes, attributes } = resRequiredProps;

  const { [`${controlName}isBgOverlay`]: isBgOverlay } = attributes;

  return (
    <>
      <BgControl
        resRequiredProps={resRequiredProps}
        controlName={controlName}
        noMainBgi={noMainBgi}
      />

      {noOverlay === false && (
        <>
          <hr />

          <ToggleControl
            label={__("Enable Overlay")}
            checked={isBgOverlay}
            onChange={() =>
              setAttributes({
                [`${controlName}isBgOverlay`]: !isBgOverlay,
              })
            }
          />

          {isBgOverlay && (
            <OverlayControl
              resRequiredProps={resRequiredProps}
              controlName={controlName}
              noOverlayBgi={noOverlayBgi}
            />
          )}
        </>
      )}
    </>
  );
}
