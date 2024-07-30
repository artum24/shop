"use client";
import "./styles/global.css";
import { ReactNode } from "react";
import classNames from "classnames";

type ButtonVariant = "primary" | "outlined";
type ButtonSize = "small" | "default";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  variant = "primary",
  children,
  className,
  size = "default",
  appName = "web",
}: ButtonProps) => {
  const variantClasses = {
    "border-2 border-black bg-black text-white": variant === "primary",
    "border-2 border-black": variant === "outlined",
  };
  const sizeClasses = {
    "px-6 py-2": size === "default",
    "px-2 py-1  text-sm": size === "small",
  };
  return (
    <button
      className={`${classNames("rounded-md", sizeClasses, variantClasses, { [className]: !!className })}`}
    >
      {children}
    </button>
  );
};
