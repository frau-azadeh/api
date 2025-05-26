import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: "primary" | "secondary" | "danger";
    size?: "xs" | "md" | "lg";
    children: ReactNode;
}
const Button:React.FC<ButtonProps> = ({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props

}) => {
  const variantClass = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
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
          'px-2 py-4 rounded-lg',
          variantClass[variant],
          sizeClass[size],
          className
        )}
    >
        {children}
    </button>
  )
}

export default Button