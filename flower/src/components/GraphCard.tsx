import React, { FC, useState, useEffect } from "react";

import StatusIcon from "./StatusIcon";

import { gardenColors, colors, ansiColors } from "../styles/variables";
import { useUiContext } from "../contexts/ui";

const GraphCard: FC<{
  active?: boolean;
  node?: any;
  children?: any;
  onClick?: Function;
}> = ({ active = false, node = {}, onClick = () => null }) => {
  const [{ darkCards: dark }] = useUiContext();

  const stateTitles = {
    build: "Building",
    deploy: "Deploying",
    run: "Running a task",
    test: "Running tests"
  };
  const { module, service, state, status } = node;
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
        border: active ? `2px solid ${gardenColors.gardenBlue}` : "",
        position: "relative"
      }}
      onClick={() => {
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
            padding: "8px 10px",
            display: "flex",
            alignItems: "center",
            fontFamily: "Inter, sans-serif"
          }}
        >
          <StatusIcon status={status} />
          &nbsp;{status}
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
