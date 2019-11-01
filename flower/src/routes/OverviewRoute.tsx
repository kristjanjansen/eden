import React, { FC, ReactNode, useState } from "react";

import Layout from "../containers/Layout";
import SimpleCard from "../components/SimpleCard";
import Slider from "../components/Slider";
import { any } from "../utils/utils";

const Oveview: FC = () => {
  const [cols, setCols] = useState(6);
  const [rows, setRows] = useState(6);
  return (
    <Layout padded>
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: `repeat(${cols},1fr)`,
          gridTemplateRows: `repeat(${rows},1fr)`,
          gridGap: "20px",
          gridAutoFlow: "row dense",
          position: "relative"
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div style={{ gridRowEnd: `span ${any([1, 1, 2])}` }}>
            <SimpleCard>Card #{i} with some output here</SimpleCard>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "fixed",
          left: "220px",
          bottom: "20px",
          width: "200px"
        }}
      >
        <div
          style={{
            marginBottom: "10px",
            fontSize: "12px",
            opacity: 0.3,
            fontFamily: "Inter, sans-serif"
          }}
        >
          Cols: {cols}
        </div>
        <Slider
          value={cols}
          min={1}
          max={10}
          onChange={(cols: number) => setCols(cols)}
        />
      </div>
      <div
        style={{
          position: "fixed",
          left: "440px",
          bottom: "20px",
          width: "200px"
        }}
      >
        <div
          style={{
            marginBottom: "10px",
            fontSize: "12px",
            opacity: 0.3,
            fontFamily: "Inter, sans-serif"
          }}
        >
          Rows: {rows}
        </div>
        <Slider
          value={rows}
          min={1}
          max={10}
          onChange={(rows: number) => setRows(rows)}
        />
      </div>
    </Layout>
  );
};

export default Oveview;
