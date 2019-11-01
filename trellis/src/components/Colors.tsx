import React, { FC } from "react";

import { gardenColors } from "../styles/variables";

const Colors: FC = ({ children = null }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
    {Object.entries(gardenColors).map(([key, value], index) => {
      if (key !== "__filemeta") {
        return (
          <div key={index} style={{ padding: "5px", backgroundColor: value }}>
            {key}
          </div>
        );
      }
    })}
  </div>
);

export default Colors;
