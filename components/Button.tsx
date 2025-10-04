import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}
const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 ",
};
const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-orange-400 text-neutral-950 border-orange-400",
  secondary: "border-orange-400 bg-transparent ",
};
const Button: React.FC<ButtonProps> = ({
  children,
  size = "sm",
  variant = "primary",
  className,

  ...rest
}) => {
  return (
    <button
      className={clsx(
        " border h-12 rounded-full px-6 font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
