import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => (
  <div style={{ padding: "10px 0" }}>
    {[
      { to: "/", title: "Oveview" },
      { to: "/graph", title: "Graph" },
      { to: "/logs", title: "Logs" }
    ].map(({ to, title }, i) => (
      <Link
        key={i}
        to={to}
        style={{
          display: "block",
          padding: "10px 20px",
          textDecoration: "none",
          color: "gray"
        }}
      >
        {title}
      </Link>
    ))}
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
      <div style={{ flex: 1, padding: "20px" }}>{children}</div>
    </div>
  );
};

export default Layout;
