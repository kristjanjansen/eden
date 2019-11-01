import React, { FC, useState, useEffect } from "react";

import { gardenColors, colors } from "../styles/variables";

const GraphCard: FC<{
  active?: boolean;
  node?: any;
  children?: any;
  onClick?: Function;
}> = ({ active = false, node = null, onClick = () => null }) => {
  const [currentlyActive, setCurrentlyActive] = useState(false);
  useEffect(() => setCurrentlyActive(active), [active]);
  const { type, status, service } = node;
  return (
    <div
      style={{
        background: "white",
        borderRadius: "5px",
        boxShadow: "0 0 2px 2px rgba(0,0,0,0.05)",
        height: "100%",
        padding: "10px",
        color: colors.darkerGray,
        border: currentlyActive
          ? `2px solid ${gardenColors.gardenBlue}`
          : "2px solid transparent"
      }}
      onClick={() => {
        setCurrentlyActive(!currentlyActive);
        onClick();
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gridGap: "5px"
        }}
      >
        <div style={{ opacity: 0.5 }}>Service:</div>
        <div>{service}</div>
        <div style={{ opacity: 0.5 }}>Type:</div>
        <div>{type}</div>
        <div style={{ opacity: 0.5 }}>Status:</div>
        <div>{status}</div>
      </div>
    </div>
  );
};

export default GraphCard;
