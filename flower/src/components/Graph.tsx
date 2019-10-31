import React, { FC } from "react";

const LogLine: FC<{ layout: object }> = layout => {
  return <pre>{JSON.stringify(layout)}</pre>;
};

export default LogLine;
