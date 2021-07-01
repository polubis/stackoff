import React, { FC } from "react";

import style from "./Button.scss";

export interface ButtonImportance {
  high?: boolean;
  medium?: boolean;
  low?: boolean;
}

export type ButtonImportanceTypes = (keyof ButtonImportance)[];

export interface ButtonProps
  extends ButtonImportance,
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {}

const TYPES: ButtonImportanceTypes = ["high", "medium", "low"];

const getImportanceClass = (importance: ButtonImportance): string => {
  const usedType = TYPES.find((type) => importance[type]) || "high";

  return style[usedType];
};

const Button: FC<ButtonProps> = (props) => {
  const { high, medium, low, ...btnProps } = props;

  return (
    <button
      className={`${style.button} ${getImportanceClass(props)} ${
        btnProps.className
      }`}
      {...btnProps}
    />
  );
};

export default Button;
