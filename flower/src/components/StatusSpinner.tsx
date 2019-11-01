import React, { FC, useState } from "react";

import { ansiColors } from "../styles/variables";

import { useInterval } from "react-use";
import spinners from "cli-spinners";

const StatusSpinner: FC<{ spinner?: string }> = ({ spinner = "dots" }) => {
  const [frame, setFrame] = useState(0);

  const { frames, interval } = (spinners as { [key: string]: any })[spinner];

  useInterval(() => {
    if (frame < frames.length - 1) {
      setFrame(frame + 1);
    } else {
      setFrame(0);
    }
  }, interval);

  return <div style={{ fontSize: "12px" }}>{frames[frame]}</div>;
};

export default StatusSpinner;
