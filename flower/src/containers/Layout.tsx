import React, { FC, useState } from "react";

import Menu from "../components/Menu";
import Details from "../components/Details";

import { colors } from "../styles/variables";

const Layout: FC<{
  children?: any;
  details?: any;
  padded?: boolean;
}> = ({ children, padded = false, details = null }) => {
  const [showDetails, setShowDetails] = useState(true);

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
      {showDetails && (
        <div
          style={{
            width: "300px",
            boxShadow: "-5px 0 10px rgba(0,0,0,0.05)",
            zIndex: 1
          }}
        >
          <Details onClose={() => setShowDetails(false)}>{showDetails}</Details>
        </div>
      )}
    </div>
  );
};

export default Layout;
