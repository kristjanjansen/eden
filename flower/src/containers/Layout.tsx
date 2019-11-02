import React, { FC, useState } from "react";

import Menu from "../components/Menu";
import Details from "../components/Details";
import DarkControls from "../components/DarkControls";

import { colors } from "../styles/variables";
import { useUiContext } from "../contexts/ui";

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
  const [{ darkLayout: dark }] = useUiContext();

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: dark ? colors.darkestGray : "white",
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
            width: "25vw",
            boxShadow: "-5px 0 10px rgba(0,0,0,0.1)"
          }}
        >
          <Details onClose={() => onClose()}>{details}</Details>
        </div>
      )}
      <DarkControls />
    </div>
  );
};

export default Layout;
