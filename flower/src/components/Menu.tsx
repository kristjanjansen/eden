import React, { FC } from "react";
import { Link } from "react-router-dom";
import { colors } from "../styles/variables";

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
          fontFamily: "Inter, sans-serif",
          display: "block",
          padding: "10px 20px",
          textDecoration: "none",
          color: colors.gray,
          fontSize: "18px",
          fontWeight: 600
        }}
      >
        {title}
      </Link>
    ))}
  </div>
);

export default Menu;
