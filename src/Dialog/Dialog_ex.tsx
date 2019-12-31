/** @jsx jsx */
import { Fragment } from "react";
import { css, jsx } from "@emotion/core";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";

export type DialogExProps = {
  visible: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellabel?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const DialogEx = ({
  visible,
  title,
  description,
  children,
  hideButtons,
  cancellabel,
  cancelText,
  confirmText,
  onCancel,
  onConfirm
}: DialogExProps) => {
  if (!visible) return null;

  return (
    <Fragment>
      <div css={[fullscreen, darkLayer]}></div>
      <div css={[fullscreen, whiteBoxWrapper]}>
        <div css={[whiteBox]}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          {!hideButtons && (
            <ButtonGroup>
              {cancellabel && (
                <Button theme="tertiary" onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              <Button onClick={onConfirm}>{confirmText}</Button>
            </ButtonGroup>
          )}
        </div>
      </div>
    </Fragment>
  );
};

DialogEx.defaultProps = {
  cancelText: "취소",
  confirmText: "확인"
};

const fullscreen = css``;

const darkLayer = css``;

const whiteBoxWrapper = css``;

const whiteBox = css``;

export default DialogEx;
