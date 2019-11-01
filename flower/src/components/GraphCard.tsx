import React, { FC, useState, useEffect } from "react";
import { useInterval } from "react-use";

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
        opacity: status == "pending" || status == "cancelled" ? 0.25 : 1,
        background: "white",
        borderRadius: "5px",
        boxShadow: "0 0 2px 2px rgba(0,0,0,0.05)",
        height: "100%",
        color: colors.darkerGray,
        overflow: "hidden",
        border: currentlyActive ? `2px solid ${gardenColors.gardenBlue}` : "",
        position: "relative"
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
          gridTemplateRows: "30px 1fr 30px",
          gridGap: "5px",
          height: "100%"
        }}
      >
        <div
          style={{
            color: colors.darkGray,
            borderBottom: "1px solid",
            borderBottomColor: colors.lighterGray,
            padding: "8px",
            fontWeight: "bold"
          }}
        >
          {state == "build" ? (
            <div style={{ fontWeight: "bold" }}>{module}</div>
          ) : (
            <div>
              <span style={{ opacity: 0.5, fontWeight: "bold" }}>{module}</span>{" "}
              / <span style={{ fontWeight: "bold" }}>{service}</span>
            </div>
          )}
        </div>
        <div
          style={{
            color: colors.darkGray,
            padding: "8px"
          }}
        >
          {state}
        </div>
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
