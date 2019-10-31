import React, { FC, useState, useEffect, useRef } from "react";

const Log: FC<{ items?: any[] }> = ({ items = [] }) => {
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
        overflow: "scroll",
        minHeight: "25vh",
        backgroundColor: "#333",
        color: "white",
        fontSize: "13px",
        whiteSpace: "pre-wrap",
        padding: "20px",
        lineHeight: "20px"
      }}
    >
      {items.join("\n")}
      <div ref={log} style={{ height: "" }}></div>
    </div>
  );
};

export default Log;
