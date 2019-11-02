import React, { FC } from "react";
import { useUiContext } from "../contexts/ui";
import Slider from "./Slider";

const Details: FC = () => {
  const [{ darkLayout }, dispatch] = useUiContext();

  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        bottom: "20px",
        width: "40px"
      }}
    >
      {darkLayout}
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
    </div>
  );
};

export default Details;
