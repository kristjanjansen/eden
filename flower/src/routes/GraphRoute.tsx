import React, { FC, useState, useEffect } from "react";
import ELK from "elkjs/lib/elk.bundled.js";

import Layout from "../containers/Layout";
import Graph from "../components/Graph";

import { randomNodes, randomEdges } from "../data/graph";

const elk = new ELK();

// [ 'layered', 'stress', 'mrtree', 'radial', 'force', 'disco' ]
const graph = {
  id: "root",
  layoutOptions: {
    "elk.algorithm": "layered"
  },
  children: randomNodes(20, { width: 200, height: 100 }),
  edges: randomEdges(20)
};

const GraphRoute: FC = () => {
  const [layout, setLayout] = useState({});

  useEffect(() => {
    const generateGraph = async () => {
      const elkLayout = await elk.layout(graph);
      setLayout(elkLayout);
    };
    generateGraph();
  }, []);

  return <Layout>{<Graph layout={layout} />}</Layout>;
};

export default GraphRoute;
