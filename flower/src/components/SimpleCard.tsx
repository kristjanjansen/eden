import React, { FC, useState, useEffect } from "react";

import { gardenColors, colors } from "../styles/variables";
import { useUiContext } from "../contexts/ui";

const SimpleCard: FC<{
  active?: boolean;
  children?: any;
  onClick?: Function;
}> = ({ active = false, children = null, onClick = () => null }) => {
  const [{ darkCards: dark }] = useUiContext();

  return (
    <div
      style={{
        background: dark ? colors.darkestGray : "white",
        borderRadius: "5px",
        boxShadow: "0 0 2px 2px rgba(0,0,0,0.05)",
        height: "100%",
        padding: "10px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        fontSize: "14px",
        color: colors.lightGray,
        border: active
          ? `2px solid ${gardenColors.gardenBlue}`
          : "2px solid transparent"
      }}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </div>
  );
};

export default SimpleCard;
