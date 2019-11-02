import React, { FC, useState } from "react";

import Layout from "../containers/Layout";
import SimpleCard from "../components/SimpleCard";
import Slider from "../components/Slider";

import { cards } from "../data/overview";

const OveviewRoute: FC = () => {
  const [darkLayout, setDarkLayout] = useState(false);
  const [darkCards, setDarkCards] = useState(false);

  // By default use 6 × 6 grid layout
  const [cols, setCols] = useState(6);
  const [rows, setRows] = useState(6);

  return (
    <Layout padded dark={darkLayout}>
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
        {/* Map generated card data to card components */}
        {cards.map(({ title, height }, i) => (
          <div key={i} style={{ gridRowEnd: `span ${height}` }}>
            <SimpleCard dark={darkCards}>{title}</SimpleCard>
          </div>
        ))}
      </div>

      {/*
        Light / dark controls 
        @TODO Extract this to layout component / global UI state
      */}

      <div
        style={{
          position: "fixed",
          left: "20px",
          bottom: "20px",
          width: "40px"
        }}
      >
        <Slider
          value={darkLayout ? 1 : 0}
          min={0}
          max={1}
          onChange={(value: number) => setDarkLayout(!!value)}
        />
      </div>

      <div
        style={{
          position: "fixed",
          left: "80px",
          bottom: "20px",
          width: "40px"
        }}
      >
        <Slider
          value={darkCards ? 1 : 0}
          min={0}
          max={1}
          onChange={(value: number) => setDarkCards(!!value)}
        />
      </div>

      {/*
        Row / col slider controls 
        @TODO Extract this to layout component / global UI state
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

export default OveviewRoute;
