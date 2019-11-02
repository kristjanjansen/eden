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

  return (
    <Layout
      details={
        activeNodeIndex > -1 &&
        layout &&
        layout.children && (
          <pre>{JSON.stringify(layout.children[activeNodeIndex], null, 2)}</pre>
        )
      }
    >
      <Graph
        layout={layout}
        setNode={(index: any) => setActiveNodeIndex(index)}
      />
    </Layout>
  );
};

export default GraphRoute;
