import React, { FC, useState, useEffect } from "react";

import { gardenColors, colors } from "../styles/variables";
import Status from "./Status";

const GraphCard: FC<{
  active?: boolean;
  node?: any;
  children?: any;
  onClick?: Function;
}> = ({ active = false, node = {}, onClick = () => null }) => {
  const [currentlyActive, setCurrentlyActive] = useState(false);
  useEffect(() => setCurrentlyActive(active), [active]);
  const { module, service, state, status } = node;
  return (
    <div
      style={{
        background: "white",
        borderRadius: "5px",
        boxShadow: "0 0 2px 2px rgba(0,0,0,0.05)",
        height: "100%",
        color: colors.darkerGray,
        overflow: "hidden",
        border: currentlyActive ? `2px solid ${gardenColors.gardenBlue}` : ""
      }}
      onClick={() => {
        setCurrentlyActive(!currentlyActive);
        onClick();
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "auto 1fr auto",
          gridGap: "5px",
          height: "100%"
        }}
      >
        <div>
          <div style={{ opacity: 0.5 }}>Module:</div>
        </div>
        <div>Aa</div>
        <div
          style={{
            background: colors.lightestGray,
            color: colors.darkGray,
            borderTop: "1px solid",
            borderTopColor: colors.lighterGray,
            padding: "8px",
            display: "flex",
            alignItems: "center"
          }}
        >
          <Status status={status} />
          &nbsp;{status}
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
