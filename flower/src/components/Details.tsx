import React, { FC } from "react";
import { useUiContext } from "../contexts/ui";
import { colors } from "../styles/variables";

const Details: FC<{ children?: any; onClose?: Function }> = ({
  children = null,
  onClose = () => null
}) => {
  const [_, dispatch] = useUiContext();

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          fontSize: "22px",
          cursor: "pointer",
          color: colors.gray,
          padding: "20px"
        }}
        onClick={() =>
          dispatch({ type: "activeNodeIndex", activeNodeIndex: -1 })
        }
      >
        ×
      </div>
      <div style={{ padding: "20px" }}>
        <mark>WIP</mark>
        <br />
        <br />
        {children}
      </div>
    </div>
  );
};

export default Details;
