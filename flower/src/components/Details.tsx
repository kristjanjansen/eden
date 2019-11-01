import React, { FC } from "react";

const Details: FC<{ children?: any; onClose?: Function }> = ({
  children = null,
  onClose = () => null
}) => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          fontSize: "20px",
          cursor: "pointer",
          color: "gray",
          padding: "20px"
        }}
        onClick={() => onClose()}
      >
        ×
      </div>
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};

export default Details;
