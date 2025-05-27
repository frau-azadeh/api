import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "xs" | "md" | "lg";
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const variantClass = {
    primary: "bg-blue-500",
    secondary: "bg-gray-500",
    danger: "bg-red-500",
  };

  const sizeClass = {
    xs: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        "rounded-lg cursor-pointer text-white",
        variantClass[variant],
        sizeClass[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
