import React, { FC, useState } from "react";

import Menu from "../components/Menu";
import Details from "../components/Details";

import { colors } from "../styles/variables";

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
  const dark = false;
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        background: dark ? colors.darkestGray : colors.lightestGray
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
    </div>
  );
};

export default Layout;
