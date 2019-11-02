import React, { FC, useState, useEffect } from "react";
import ELK from "elkjs/lib/elk.bundled.js";

import Layout from "../containers/Layout";
import Graph from "../components/Graph";

import { randomNodes, randomEdges } from "../data/graph";
import Slider from "../components/Slider";

// https://github.com/OpenKieler/elkjs

const elk = new ELK();

const graph = {
  id: "root",
  layoutOptions: {
    "elk.algorithm": "layered"
  },
  children: randomNodes(40, { width: 200, height: 105 }),
  edges: randomEdges(40)
};

const GraphRoute: FC = () => {
  const [layout, setLayout] = useState({ children: [] });
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1);

  useEffect(() => {
    const generateGraph = async () => {
      const elkLayout = await elk.layout(graph);
      setLayout(elkLayout);
    };
    generateGraph();
  }, []);

  // Dark mode controls
  // @TODO extract this to a global UI state context
  const [darkLayout, setDarkLayout] = useState(false);
  const [darkCards, setDarkCards] = useState(false);

  return (
    <Layout
      dark={darkLayout}
      details={
        layout &&
        layout.children && (
          <pre>{JSON.stringify(layout.children[activeNodeIndex], null, 2)}</pre>
        )
      }
      showDetails={activeNodeIndex > -1}
      onClose={() => setActiveNodeIndex(-1)}
    >
      <Graph
        dark={darkCards}
        layout={layout}
        setNode={(index: any) => setActiveNodeIndex(index)}
      />

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
    </Layout>
  );
};

export default GraphRoute;
