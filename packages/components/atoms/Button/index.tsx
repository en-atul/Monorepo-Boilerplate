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
  disabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
  fontSize?: "xs" | "sm" | "lg";
  borderRadius?: "none" | "lg" | "full";
  borderWidth?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  type?: "button" | "submit";
  form?: string;
};

export const Button: FC<ButtonProps> = ({
  disabled = false,
  onClick,
  ref,
  borderRadius = "lg",
  bgColor = "bg-primary",
  className,
  fontSize = "sm",
  textColor = "white",
  borderWidth = "border",
  borderColor = "white",
  type = "button",
  form
}) => {
  return (
    <OptionalIcon>
      <button
        type={type}
        form={form}
        className={classnames(
          `${className} leading-snug rounded-${borderRadius} ${
            disabled ? "bg-gray-500" : bgColor
          } text-${fontSize} text-${textColor} ${borderWidth} border-${disabled ? "gray-500" : borderColor}`,
          {
            "pointer-events-none": disabled
          }
        )}
        ref={ref}
        onClick={onClick}
        disabled={disabled}
      >
        hello
      </button>
    </OptionalIcon>
  );
};
