import React, { FC, Fragment, JSX } from "react";
import classnames from "classnames";
import Icon from "../Icon/Icon";

/* 
Create enum for nutton with  - content/full 
Create enum for IconPosition
add props for onClick, disabled, ref.
 */
type IconProps = {
  iconPosition?: string;
  iconOnly?: boolean;
  iconType?: string;
  children: React.ReactNode;
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
export const OptionalIcon: FC<IconProps> = ({
  iconPosition,
  iconOnly,
  iconType,
  children
}): JSX.Element[] | JSX.Element => {
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
<OptionalIcon>
  <button>hello</button>
</OptionalIcon>;
/* export const Button: FC<Props> = ({}) => {
  return (
    <button>
      <span></span>
    </button>
  );
};
 */
