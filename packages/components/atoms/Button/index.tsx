import React, { FC, MouseEvent } from "react";
import classnames from "classnames";
import Icon from "../Icon/Icon";

type IconProps = {
  iconPosition?: string;
  iconOnly?: boolean;
  iconType?: string;
};
const IconWrapper: FC<IconProps> = ({
  iconPosition,
  iconOnly,
  iconType,
  children,
}) => {
  return (
    <span
      className={classnames(`inline-block h-4 w-4 min-w-[1.25rem] `, {
        "pr-2": !iconOnly && iconPosition === "start",
        "pl-2": !iconOnly && iconPosition === "end",
      })}
      data-test-id={iconType}
    >
      {children}
    </span>
  );
};
const OptionalIcon: FC<IconProps> = ({
  iconPosition,
  iconOnly,
  iconType,
  children,
}) => {
  if (iconOnly && iconType && children) {
    return (
      <IconWrapper
        iconOnly={iconOnly}
        iconPosition={iconPosition}
        iconType={iconType}
      >
        <Icon type={iconType}>{children}</Icon>
      </IconWrapper>
    );
  }
  if (iconType && children) {
    const buttonElement = [
      <IconWrapper
        iconPosition={iconPosition}
        iconType={iconType}
      ></IconWrapper>,
    ];
  }
};
export const Button: FC<Props> = ({}) => {
  return (
    <button>
      <span></span>
    </button>
  );
};
