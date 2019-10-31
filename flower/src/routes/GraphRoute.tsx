import React, { FC, useState, useEffect } from "react";
import ELK from "elkjs/lib/elk.bundled.js";

import Layout from "../containers/Layout";
import Graph from "../components/Graph";

const elk = new ELK();

const graph = {
  id: "root",
  layoutOptions: { "elk.algorithm": "layered" }, // layered
  children: [
    { id: "n1", width: 30, height: 30 },
    { id: "n2", width: 30, height: 30 },
    { id: "n3", width: 30, height: 30 },
    { id: "n4", width: 30, height: 30 }
  ],
  edges: [
    { id: "e1", sources: ["n1"], targets: ["n2"] },
    { id: "e2", sources: ["n1"], targets: ["n3"] },
    { id: "e3", sources: ["n1"], targets: ["n4"] },
    { id: "e4", sources: ["n2"], targets: ["n4"] }
  ]
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

  return <Layout padded>{<Graph layout={layout} />}</Layout>;
};

export default GraphRoute;
