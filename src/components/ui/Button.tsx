import React, { ButtonHTMLAttributes, ReactNode, memo } from "react";

import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "call";
  size?: "xs" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "right" | "left";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "xs",
  children,
  className,
  icon,
  iconPosition = "left",
  ...props
}) => {
  const variantClass = {
    primary: "bg-blue-500 hover:bg-blue-700 transition duration-300",
    secondary: "bg-gray-500 hover:bg-gray-700 transition duration-300",
    danger: "bg-red-500 hover:bg-red-700 transition duration-300",
    call: "bg-green-500 hover:bg-green-700 transition duration-300",
  };

  const sizeClass = {
    xs: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={clsx(
        "rounded-lg text-white cursor-pointer flex items-center",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default memo(Button);
