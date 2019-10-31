import React, { FC } from "react";

const GraphCard: FC<{ children?: any }> = ({ children = null }) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "5px",
        boxShadow: "0 0 1px 1px rgba(0,0,0,0.05)",
        height: "100%",
        padding: "10px"
      }}
    >
      {children}
    </div>
  );
};

export default GraphCard;
