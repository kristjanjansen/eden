import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { colors } from "../styles/variables";

const Menu: FC = () => {
  const { pathname } = useLocation();

  return (
    <div style={{ padding: "10px 0" }}>
      {[
        { to: "/", title: "Oveview", badge: "WIP" },
        { to: "/graph", title: "Graph" },
        { to: "/logs", title: "Logs" }
      ].map(({ to, title, badge = "" }, i) => (
        <Link
          key={i}
          to={to}
          style={{
            fontFamily: "Inter, sans-serif",
            padding: "10px 20px",
            textDecoration: "none",
            color: to == pathname ? colors.gray : colors.lightGray,
            fontSize: "18px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center"
          }}
        >
          {title}&nbsp;{badge && <mark>{badge}</mark>}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
