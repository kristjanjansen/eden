import React, { FC, useState, useEffect } from "react";
import { useInterval } from "react-use";

import { gardenColors, colors, ansiColors } from "../styles/variables";
import Status from "./Status";

const GraphCard: FC<{
  active?: boolean;
  node?: any;
  children?: any;
  onClick?: Function;
}> = ({ active = false, node = {}, onClick = () => null }) => {
  const [currentlyActive, setCurrentlyActive] = useState(false);

  useEffect(() => setCurrentlyActive(active), [active]);

  const [opacity, setOpacity] = useState(1);
  const stateTitles = {
    build: "Building",
    deploy: "Deploying",
    run: "Running a task",
    test: "Running tests"
  };
  const { module, service, state, status } = node;
  const dark = false;
  return (
    <div
      style={{
        opacity: status == "pending" || status == "cancelled" ? 0.3 : 1,
        background: dark ? colors.darkestGray : "white",
        borderRadius: "5px",
        boxShadow: "0 0 2px 2px rgba(0,0,0,0.07)",
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
          height: "100%"
        }}
      >
        <div>
          <div
            style={{
              padding: "10px 10px 0px 10px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              color: dark ? colors.gray : colors.lightGray
            }}
          >
            {stateTitles[state]}
          </div>
          <div
            style={{
              color: dark ? ansiColors.cyan : colors.darkGray,
              // borderBottom: "1px solid",
              // borderBottomColor: colors.lighterGray,
              padding: "8px 10px 14px 10px",
              fontWeight: "bold"
            }}
          >
            {state == "build" ? (
              <div style={{ fontWeight: dark ? "bold" : "normal" }}>
                {module}
              </div>
            ) : (
              <div>
                <span
                  style={{ opacity: 0.5, fontWeight: dark ? "bold" : "normal" }}
                >
                  {module}
                </span>{" "}
                <span style={{ opacity: 0.5 }}>/</span>{" "}
                <span style={{ fontWeight: dark ? "bold" : "normal" }}>
                  {service}
                </span>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            background: dark
              ? colors.darkerGray
              : status == "error"
              ? colors.pink
              : colors.lightestGray,
            color: dark ? colors.lighterGray : colors.gray,
            // borderTop: "1px solid",
            //borderTopColor: colors.lighterGray,
            padding: "8px 10px",
            display: "flex",
            alignItems: "center",
            fontFamily: "Inter, sans-serif"
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
