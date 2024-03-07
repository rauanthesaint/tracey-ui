import React, { FC } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";
import { IPropsButton } from "./Button.types";

const Button: FC<IPropsButton> = ({
  children,
  title = "button",
  onClick,
  size,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(className, styles.Button)}
      title={title}
    >
      {children}
    </button>
  );
};

export default Button;
