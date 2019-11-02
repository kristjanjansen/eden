import React, { FC, ReactNode, useState } from "react";

import Layout from "../containers/Layout";
import SimpleCard from "../components/SimpleCard";
import Slider from "../components/Slider";
import { any } from "../utils/utils";

const OveviewRoute: FC = () => {
  // By default use 6 × 6 grid layout
  const [cols, setCols] = useState(6);
  const [rows, setRows] = useState(6);
  return (
    <Layout padded>
      <div
        style={{
          height: "100%",
          display: "grid",

          // "cols" value is passed to CSS grid repeat() function
          // With cols = 3, the result will be the following:
          // "1fr 1fr 1fr"
          gridTemplateColumns: `repeat(${cols},1fr)`,
          gridTemplateRows: `repeat(${rows},1fr)`,

          // Make the grid to use dense layout
          // packing algorithm
          gridAutoFlow: "row dense",

          // A grid gap
          gridGap: "20px",

          // Required for placing the
          // absolutely posioned sliders
          // @TODO Put the slides to a dedicated
          // Layout regiion
          position: "relative"
        }}
      >
        {/* Generate 20 cards with with the heights of either 1 or 2 rows */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div style={{ gridRowEnd: `span ${any([1, 1, 2])}` }}>
            <SimpleCard>Card #{i} with some output here</SimpleCard>
          </div>
        ))}
      </div>

      {/*
        Slider controls 
        @TODO Extract this to Controls component
      */}
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
        {/* A wrapper around <input type=range />] */}
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
        {/* A wrapper around <input type=range />] */}
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

export default OveviewRoute;
