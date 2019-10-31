import React, { FC, useState, useEffect, useRef } from "react";

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
        backgroundColor: "#333",
        color: "white",
        fontSize: "14px",
        whiteSpace: "pre-wrap",
        padding: "20px",
        lineHeight: "20px"
      }}
    >
      {items.join("\n")}
      <div ref={log} style={{ height: "14px" }}></div>
    </div>
  );
};

export default Log;
