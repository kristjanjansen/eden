import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => (
  <div>
    {[{ to: "/", title: "Logs" }, { to: "/", title: "Oveview" }].map(
      ({ to, title }) => (
        <div>{title}</div>
      )
    )}
  </div>
);

const Layout: React.FC<{
  children?: any;
}> = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "200px", boxShadow: "5px 0 10px rgba(0,0,0,0.05)" }}>
        <Menu />
      </div>
      <div style={{ flex: 1 }}>{children}</div>
    </div>
  );
};

export default Layout;
