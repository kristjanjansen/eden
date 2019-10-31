import React, { FC } from "react";

// const colors = {
//   border: "rgba(0,0,0,0.12)",
//   gray: "#f0f0f0",
//   black: "#192A3E",
//   grayLight: "#fafafa",
//   grayUnselected: "#C2CFE0",
//   gardenGray: "#555656",
//   gardenGrayLight: "#cdcfd1",
//   gardenGrayLighter: "#FBFCFD",
//   gardenBlack: "#010101",
//   gardenBlue: "#00adef",
//   gardenBlueDark: "#01569a",
//   gardenBlueLight: "#e4f6fd",
//   gardenGreenDarker: "#16999a",
//   gardenGreenDark: "#00c9b6",
//   gardenGreen: "#66ffcc",
//   gardenGreenLight: "#c9ffed",
//   gardenPink: "#ed83cc",
//   gardenPinkRgba: "rgba(237, 131, 204, 0)",
//   gardenWhite: "#ffffff"
// };

import { colors } from "../styles/variables";

const Colors: FC = ({ children = null }) => (
  <div>
    {Object.entries(colors).map(([key, value], index) => {
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
