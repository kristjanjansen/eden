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
          top: "20px",
          right: "20px",
          fontSize: "20px",
          cursor: "pointer",
          color: "gray"
        }}
        onClick={() => onClose()}
      >
        ×
      </div>
    </div>
  );
};

export default Details;
