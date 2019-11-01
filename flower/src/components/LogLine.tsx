import React, { FC } from "react";

const LogLine = ({ line }: any) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      <div>{JSON.stringify(line)}</div>
    </div>
  );
};

export default LogLine;
