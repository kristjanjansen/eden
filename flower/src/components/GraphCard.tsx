import React, { FC, useState, useEffect } from "react";

import { gardenColors } from "../styles/variables";

const GraphCard: FC<{
  active?: boolean;
  children?: any;
  onClick?: Function;
}> = ({ active = false, children = null, onClick = () => null }) => {
  const [currentlyActive, setCurrentlyActive] = useState(false);
  useEffect(() => setCurrentlyActive(active), [active]);
  return (
    <div
      style={{
        background: "white",
        borderRadius: "5px",
        boxShadow: "0 0 1px 1px rgba(0,0,0,0.05)",
        height: "100%",
        padding: "10px",
        border: currentlyActive
          ? `2px solid ${gardenColors.gardenBlue}`
          : "2px solid transparent"
      }}
      onClick={() => {
        setCurrentlyActive(!currentlyActive);
        onClick();
      }}
    >
      {children}
    </div>
  );
};

export default GraphCard;
