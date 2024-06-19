import React from "react";
import classNames from "classnames";

type ButtonStyle = "primary" | "secondary" | "difficulty";

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  active?: boolean;
  buttonStyle?: ButtonStyle;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  className,
  active = false,
  buttonStyle = "primary",
}) => {
  const baseStyles = `px-8 py-2 text-white rounded-md italic font-900 text-2xl rounded-xl`;

  const styleMap: { [key in ButtonStyle]: string } = {
    primary: "bg-darkblue",
    secondary: "bg-secondary",
    difficulty: "bg-primary border-2 border-white w-[240px] text-3xl",
  };

  const activeStyles = active ? "shadow-white-glow bg-white !text-primary" : "";

  const styles = classNames(
    baseStyles,
    styleMap[buttonStyle],
    activeStyles,
    className,
  );

  return (
    <button type={type} onClick={onClick} className={styles}>
      {label}
    </button>
  );
};
