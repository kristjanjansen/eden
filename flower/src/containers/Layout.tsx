import React, { FC } from "react";

import Menu from "../components/Menu";

import { colors } from "../styles/variables";

const Layout: FC<{
  children?: any;
  padded?: boolean;
}> = ({ children, padded = false }) => {
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
          display: "relative",
          overflow: "auto"
        }}
      >
        {children}
      </div>
      <div
        style={{
          width: "400px",
          boxShadow: "-5px 0 10px rgba(0,0,0,0.05)",
          padding: "20px"
        }}
      >
        <div>a</div>
      </div>
    </div>
  );
};

export default Layout;
