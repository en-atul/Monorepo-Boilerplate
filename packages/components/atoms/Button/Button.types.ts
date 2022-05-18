export enum ButtonVariant {
  Primary = "primary",
  Danger = "danger",
  Success = "success",
  Warning = "warning",
  Link = "link"
}

export enum ButtonCorner {
  Round = "round",
  Rectangular = "rectangular"
}

export enum ButtonSize {
  Small = "small",
  Medium = "medium",
  Large = "large"
}

export enum IconPosition {
  Left = "left",
  Right = "right"
}

export type IconProps = {
  iconPosition?: string;
  iconOnly?: boolean;
  iconType?: string;
  children: any;
};

export type ButtonProps = {
  onClick?: () => void;
  isDisabled?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  corner: ButtonCorner;
  variant: ButtonVariant;
  size: ButtonSize;
  shadow: boolean;
  type?: "button" | "submit";
  form?: string;
  iconOnly?: boolean;
  iconType?: string;
  iconPosition?: IconPosition;
  isSubmitting?:boolean
};
