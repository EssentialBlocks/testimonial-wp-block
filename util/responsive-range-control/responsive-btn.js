const { dispatch } = wp.data;
import {
  handleDesktopBtnClick,
  handleTabBtnClick,
  handleMobileBtnClick,
} from "../helpers";

export default function WithResBtns({
  children,
  resRequiredProps,
  label,
  controlName,
  onReset,
}) {
  const { setAttributes, resOption, objAttributes } = resRequiredProps;
  onReset = () => {
    resOption == "Desktop"
      ? setAttributes({
          [`${controlName}Range`]: objAttributes[`${controlName}Range`].default,
        })
      : "";
    resOption == "Tablet"
      ? setAttributes({
          [`TAB${controlName}Range`]:
            objAttributes[`TAB${controlName}Range`].default,
        })
      : "";
    resOption == "Mobile"
      ? setAttributes({
          [`MOB${controlName}Range`]:
            objAttributes[`MOB${controlName}Range`].default,
        })
      : "";
  };
  return (
    <div className={`responsive-btn-wrapper`}>
      <div className="responsive-btn">
        <span className="responsive-btn-label">{label}</span>
        <span
          onClick={() =>
            handleDesktopBtnClick({
              setPreviewDeviceType:
                dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
              setAttributes,
            })
          }
          class={`typoResButton dashicons dashicons-desktop ${
            resOption === "Desktop" ? "active" : " "
          }`}
        ></span>
        <span
          onClick={() =>
            handleTabBtnClick({
              setPreviewDeviceType:
                dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
              setAttributes,
            })
          }
          class={`typoResButton dashicons dashicons-tablet ${
            resOption === "Tablet" ? "active" : " "
          }`}
        ></span>
        <span
          onClick={() =>
            handleMobileBtnClick({
              setPreviewDeviceType:
                dispatch("core/edit-post").__experimentalSetPreviewDeviceType,
              setAttributes,
            })
          }
          class={`typoResButton dashicons dashicons-smartphone ${
            resOption === "Mobile" ? "active" : " "
          }`}
        ></span>
      </div>
      <div className="eb-component-wrapper">
        {children}
        <button className="eb-range-reset-button" onClick={onReset}>
          <span className="dashicon dashicons dashicons-image-rotate"></span>
        </button>
      </div>
    </div>
  );
}
