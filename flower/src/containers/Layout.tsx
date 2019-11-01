import React, { FC } from "react";

import Menu from "../components/Menu";
import Details from "../components/Details";

import { colors } from "../styles/variables";

const Layout: FC<{
  children?: any;
  details?: any;
  padded?: boolean;
}> = ({ children, padded = false, details = null }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "200px", boxShadow: "5px 0 10px rgba(0,0,0,0.05)" }}>
        <Menu />
      </div>
      <div
        style={{
          flex: 1,
          background: colors.lighterGray,
          padding: padded ? "20px" : "",
          position: "relative",
          overflow: "auto"
        }}
      >
        {children}
      </div>
      <div
        style={{
          width: "400px",
          boxShadow: "-5px 0 10px rgba(0,0,0,0.05)"
        }}
      >
        <Details>{details}</Details>
      </div>
    </div>
  );
};

export default Layout;
