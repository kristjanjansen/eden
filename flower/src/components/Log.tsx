import React, { FC, useState, useEffect, useRef } from "react";

import { colors } from "../styles/variables";
import LogLine from "./LogLine";

const Log: FC<{ items?: any[]; height?: any }> = ({
  items = [],
  height = "100vh"
}) => {
  let log = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (log.current !== null) {
      log.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest"
      });
    }
  }, [items]);

  return (
    <div
      style={{
        height,
        overflow: "scroll",
        backgroundColor: colors.darkestGray,
        color: "white",
        fontSize: "14px",
        whiteSpace: "pre-wrap",
        padding: "20px",
        lineHeight: "20px"
      }}
    >
      {items.map((line, i) => (
        <LogLine key={i} line={line}></LogLine>
      ))}
      <div ref={log} style={{ height: "14px" }}></div>
    </div>
  );
};

export default Log;
