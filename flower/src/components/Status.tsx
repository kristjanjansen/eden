import React, { FC } from "react";

import { ansiColors } from "../styles/variables";
import StatusSpinner from "./StatusSpinner";

// https://github.com/sindresorhus/cli-spinners
// http://jsfiddle.net/sindresorhus/2eLtsbey/embedded/result/

const defaultStatuses = {
  pending: {
    color: ansiColors.cyan,
    character: "⌛"
  },
  processing: {
    color: ansiColors.cyan,
    character: <StatusSpinner spinner="clock" />
  },
  done: {
    color: ansiColors.green,
    character: "✔"
  },
  cancelled: {
    color: ansiColors.red,
    character: "❌"
  },
  error: {
    color: ansiColors.red,
    character: "⚠️"
  }
};
const moonStatuses = {
  pending: {
    color: ansiColors.cyan,
    character: "🌒"
  },
  processing: {
    color: ansiColors.cyan,
    character: <StatusSpinner spinner="moon" />
  },
  done: {
    color: ansiColors.green,
    character: "🌕"
  },
  cancelled: {
    color: ansiColors.red,
    character: "❌"
  },
  error: {
    color: ansiColors.red,
    character: "⚠️"
  }
};
const statuses = moonStatuses;

const Status: FC<{
  status?: "pending" | "processing" | "done" | "cancelled" | "error";
}> = ({ status = "done" }) => {
  return (
    <div
      style={{
        color: statuses[status].color
      }}
    >
      {statuses[status].character}
    </div>
  );
};

export default Status;
