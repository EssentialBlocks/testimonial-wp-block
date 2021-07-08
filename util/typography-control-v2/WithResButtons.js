const { dispatch } = wp.data;

import {
  handleDesktopBtnClick,
  handleMobileBtnClick,
  handleTabBtnClick,
} from "../helpers";

export default function WithResButtons({
  className,
  children,
  resOption,
  setAttributes,
}) {
  return (
    <div className={`wrap_res ${className || " "}`}>
      <div className="resIcons">
        <span
          onClick={() =>
            handleDesktopBtnClick({
              setPreviewDeviceType: dispatch("core/edit-post")
                .__experimentalSetPreviewDeviceType,
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
              setPreviewDeviceType: dispatch("core/edit-post")
                .__experimentalSetPreviewDeviceType,
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
              setPreviewDeviceType: dispatch("core/edit-post")
                .__experimentalSetPreviewDeviceType,
              setAttributes,
            })
          }
          class={`typoResButton dashicons dashicons-smartphone ${
            resOption === "Mobile" ? "active" : " "
          }`}
        ></span>
      </div>
      {children}
    </div>
  );
}
