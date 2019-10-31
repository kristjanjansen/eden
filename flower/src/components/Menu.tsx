import React, { FC } from "react";
import { Link } from "react-router-dom";

const Menu: FC = () => (
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

export default Menu;
