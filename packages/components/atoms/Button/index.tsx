import React, { FC, Fragment } from "react";
import classnames from "classnames";
import Icon from "../Icon/Icon";

/* 
Create enum for button with  - content/full 
Create enum for IconPosition
add props for onClick, disabled, ref.
 */

type IconProps = {
  iconPosition?: string;
  iconOnly?: boolean;
  iconType?: string;
  children: any;
};

const IconWrapper: FC<IconProps> = ({ iconPosition, iconOnly, iconType, children }) => {
  return (
    <span
      className={classnames(`inline-block h-4 w-4 min-w-[1.25rem] `, {
        "pr-2": !iconOnly && iconPosition === "start",
        "pl-2": !iconOnly && iconPosition === "end"
      })}
      data-test-id={iconType}
    >
      {children}
    </span>
  );
};
const OptionalIcon = ({ iconPosition, iconOnly, iconType, children }: IconProps) => {
  if (iconOnly && iconType && children) {
    return (
      <IconWrapper iconOnly={iconOnly} iconPosition={iconPosition} iconType={iconType}>
        <Icon type={iconType}>{children}</Icon>
      </IconWrapper>
    );
  }
  if (iconType && children) {
    const buttonElements = [
      <IconWrapper key="icon" iconPosition={iconPosition} iconType={iconType}>
        <Icon type={iconType} />
      </IconWrapper>,
      <Fragment key="content">{children}</Fragment>
    ];
    return iconPosition === "end" ? buttonElements.reverse() : buttonElements;
  }
  return children;
};

type ButtonProps = {
  onClick?: () => void;
  isDisabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  backgroundgColor?: string;
  textColor?: string;
  variant: "oval" | "rectangular";
  size: "medium" | "small" | "large";
  backgroundColor: "transparent";
  shadow: boolean;
  type?: "button" | "submit";
  form?: string;
  iconOnly?: boolean;
  iconType?: string;
  iconPosition?: "left" | "right";
};

const btnSize = {
  small: `px-4 py-1.5 text-xs`,
  medium: `px-5 py-2 text-sm`,
  large: `px-7 py-2.5 text-base`
};

const btnVariant = {
  oval: `rounded-sm`,
  rectangular: "rounded-none"
};

export const Button: FC<ButtonProps> = ({
  onClick,
  ref,
  backgroundColor = "primary",
  textColor = "white",
  variant = "oval",
  size = "medium",
  shadow = true,
  isDisabled = false,
  type = "button",
  form,
  iconOnly = false,
  iconType,
  iconPosition
}) => {
  const shadows = shadow ? "shadow-lg" : "";
  const disabled = isDisabled ? "disabled" : "";

  return (
    <OptionalIcon iconOnly={iconOnly} iconType={iconType} iconPosition={iconPosition}>
      <button
        type={type}
        form={form}
        className={[
          `${btnSize[size]}`,
          `${btnVariant[variant]}`,
          `bg-${backgroundColor}`,
          `text-${textColor}`,
          `${shadows}`,
          `${disabled}`
        ].join(" ")}
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
      >
        Book a Appointment
      </button>
    </OptionalIcon>
  );
};
