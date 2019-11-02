import React, { FC, useState } from "react";

import Menu from "../components/Menu";
import Details from "../components/Details";

import { colors } from "../styles/variables";
import Slider from "../components/Slider";

const Layout: FC<{
  children?: any;
  details?: any;
  padded?: boolean;
  showDetails?: boolean;
  onClose?: Function;
}> = ({
  children,
  padded = false,
  details = null,
  showDetails = false,
  onClose = () => null
}) => {
  const [dark, setDark] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: dark ? colors.darkestGray : colors.lightestGray,
        position: "relative"
      }}
    >
      <div style={{ width: "200px", boxShadow: "5px 0 10px rgba(0,0,0,0.05)" }}>
        <Menu />
      </div>
      <div
        style={{
          flex: 1,
          background: dark ? colors.darkerestGray : colors.lighterGray,
          padding: padded ? "20px" : "",
          position: "relative",
          overflow: "auto"
        }}
      >
        {children}
      </div>
      {showDetails && (
        <div
          style={{
            width: "500px",
            boxShadow: "-5px 0 10px rgba(0,0,0,0.1)"
          }}
        >
          <Details onClose={() => onClose()}>{details}</Details>
        </div>
      )}

      <div
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          width: "40px"
        }}
      >
        <Slider
          value={dark}
          min={0}
          max={1}
          onChange={(value: number) => setDark(value)}
        />
      </div>
    </div>
  );
};

export default Layout;
