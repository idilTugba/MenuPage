import React from "react";
import { primary } from "./buttons.module.scss";

interface ButtonPrimaryProps {
  className?: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  className,
  handleClick,
}) => {
  return (
    <button
      onClick={handleClick}
      className={`${primary} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
