import React, { FC } from "react";
import { useUiContext } from "../contexts/ui";

const Details: FC<{ children?: any; onClose?: Function }> = ({
  children = null,
  onClose = () => null
}) => {
  const [{ showDetails }, dispatch] = useUiContext();

  return (
    <div style={{ position: "relative" }}>
      {JSON.stringify(showDetails)}
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          fontSize: "22px",
          cursor: "pointer",
          color: "gray",
          padding: "20px"
        }}
        onClick={() => dispatch({ type: "showDetails", showDetails: false })}
      >
        ×
      </div>
      <div style={{ padding: "20px" }}>{children}</div>
    </div>
  );
};

export default Details;
