import React, { FC } from "react";
import { useUiContext } from "../contexts/ui";
import Slider from "./Slider";

const Details: FC = () => {
  const [{ darkLayout, darkCards }, dispatch] = useUiContext();

  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        width: "100px"
      }}
    >
      <div
        style={{
          marginBottom: "10px",
          fontSize: "12px",
          opacity: 0.3,
          fontFamily: "Inter, sans-serif"
        }}
      >
        Theme
      </div>
      <div style={{ display: "flex" }}>
        <Slider
          value={darkLayout ? 1 : 0}
          min={0}
          max={1}
          onChange={(value: number) =>
            dispatch({
              type: "darkLayout",
              darkLayout: !!value
            })
          }
        />
        <Slider
          value={darkCards ? 1 : 0}
          min={0}
          max={1}
          onChange={(value: number) =>
            dispatch({
              type: "darkCards",
              darkCards: !!value
            })
          }
        />
      </div>
    </div>
  );
};

export default Details;
