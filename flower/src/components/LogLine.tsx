import React, { FC } from "react";
import { ansiColors } from "../styles/variables";

const LogLine = ({ line }: any) => {
  return (
    <div
      style={{
        display: "grid",
        gridGap: "0 5ch",
        gridTemplateColumns: "10ch 10ch 40ch 1fr"
      }}
    >
      <div style={{ color: ansiColors.cyan }}>{line.service}</div>
      {/* <div style={{ opacity: 0.5 }}>{line.timestamp}</div> */}
      <div style={{ opacity: 0.6 }}>{line.timestamp.split("T")[1]}</div>
      <div style={{ opacity: 0.3 }}>{line.hash}</div>
      <div style={{ color: line.color }}>{line.message}</div>
    </div>
  );
};

export default LogLine;
