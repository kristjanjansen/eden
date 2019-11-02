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
        width: "100px",
        display: "flex"
      }}
    >
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
      &nbsp;
    </div>
  );
};

export default Details;
