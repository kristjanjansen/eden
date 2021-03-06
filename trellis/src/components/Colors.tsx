import React, { FC } from "react";

import { colors } from "../styles/variables";

const Colors: FC = ({ children = null }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr" }}>
    {Object.entries(colors).map(([key, value], index) => {
      if (key !== "__filemeta") {
        return (
          <div key={index} style={{ padding: "5px", backgroundColor: value }}>
            {value} / {key}
          </div>
        );
      }
    })}
  </div>
);

export default Colors;
