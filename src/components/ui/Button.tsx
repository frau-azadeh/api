import clsx from 'clsx';
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: "primary" | "secondary" | "danger";
  size?: "xs" | "md" | "lg";
  children: ReactNode;
}
const Button:React.FC<ButtonProps> = ({
  className,
  size = "xs",
  variant = "primary",
  children,
  ...props
}) => {
  const variantClass = {
    primary: "bg-blue-500 hover:bg-blue-700 transition duration-300",
    secondary: "bg-gray-500 hover: bg-gray-700 transition duration-300",
    danger: "bg-red-500 hover:bg-red-700 transition duration-300",
    call: "bg-green-500 hover:bg-green-700 transition duration-300"
  }

  const sizeClass = {
    xs: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
    {...props}
    className={clsx(
      "rounded-lg text-white cursor-pointer",
      variantClass[variant],
      sizeClass[size],
      className,
    )}
    {...props}
    >
      {children}
    </button>
  )
}

export default Button