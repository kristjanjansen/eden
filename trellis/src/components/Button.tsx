import React, { FC } from "react";

interface ButtonProps {
  children?: any;
}

const Button: FC<ButtonProps> = ({ children = null }) => (
  <div
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "white",
      backgroundColor: "royalblue",
      borderRadius: "3px",
      padding: "4px 6px",
      cursor: "pointer"
    }}
  >
    {children}
  </div>
);

export default Button;
