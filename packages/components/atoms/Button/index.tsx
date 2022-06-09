import React, { FC, Fragment } from "react";
import classnames from "classnames";
import { Oval } from "react-loader-spinner";
import Icon from "../Icon/Icon";
import { ButtonCorner, ButtonProps, ButtonSize, ButtonVariant, IconProps } from "../../interfaces";

/* 
Create enum for button with  - content/full 
Create enum for IconPosition
add props for onClick, disabled, ref.
 */

const btnSize = {
  small: `px-4 py-1.5 text-xs`,
  medium: `px-5 py-2 text-sm`,
  large: `px-7 py-2.5 text-base`
};

const btnCorner = {
  round: `rounded-lg`,
  rectangular: "rounded-none"
};

const btnVariant = {
  primary: "bg-primary text-white",
  danger: "bg-red-500 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-500 text-black",
  link: "bg-transparent text-primary underline"
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

export const Button: FC<ButtonProps> = ({
  onClick,
  ref,
  corner = ButtonCorner.Round,
  variant = ButtonVariant.Primary,
  size = ButtonSize.Large,
  shadow = true,
  isDisabled = false,
  type = "button",
  form,
  iconOnly = false,
  iconType,
  iconPosition,
  isSubmitting,
  children
}) => {
  console.log("....variant", variant);
  const shadows = shadow ? "shadow-lg" : "";
  const disabled = isDisabled ? "bg-gray-400 text-gray-50 cursor-not-allowed no-underline shadow-lg" : "";
  const submitting = isSubmitting ? "flex items-center justify-center bg-gray-400 text-gray-50 cursor-not-allowed" : "";
  return (
    <OptionalIcon iconOnly={iconOnly} iconType={iconType} iconPosition={iconPosition}>
      <button
        type={type}
        form={form}
        className={[
          `${btnSize[size]}`,
          `${btnVariant[variant]}`,
          `${btnCorner[corner]}`,
          `${shadows}`,
          `${disabled}`,
          `${submitting}`
        ].join(" ")}
        ref={ref}
        onClick={onClick}
        disabled={isDisabled}
      >
        {children}
        {isSubmitting ? (
          <Oval
            strokeWidth={5}
            width={15}
            height={15}
            wrapperClass="ml-1"
            color="#fff"
            secondaryColor="text-blue-400"
          />
        ) : null}
      </button>
    </OptionalIcon>
  );
};
