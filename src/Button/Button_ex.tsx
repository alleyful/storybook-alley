/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  theme: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "big";
  disabled?: boolean;
  width?: string | number;
  iconOnly?: boolean;
};

const ButtonEx = ({
  children,
  theme,
  size,
  disabled,
  width,
  iconOnly,
  onClick
}: ButtonProps) => {
  return (
    <button
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]]
      ]}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonEx.defaultProps = {
  theme: "primary",
  size: "medium"
};

const style = css``;

const themes = {
  primary: css``,
  secondary: css``,
  tertiary: css``
};

const sizes = {
  small: css``,
  medium: css``,
  big: css``
};

const iconOnlyStyle = css``;

const iconOnlySizes = {
  small: css``,
  medium: css``,
  big: ``
};

export default ButtonEx;
