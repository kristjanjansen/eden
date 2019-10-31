import React, { FC, useState, useEffect } from "react";
import ELK from "elkjs/lib/elk.bundled.js";

import Layout from "../containers/Layout";
import Graph from "../components/Graph";

const elk = new ELK();

const algorithms = ["layered", "stress", "mrtree", "radial", "force", "disco"];
const graph = {
  id: "root",
  layoutOptions: { "elk.algorithm": algorithms[0] }, // layered
  children: [
    { id: "n1", width: 200, height: 150 },
    { id: "n2", width: 200, height: 150 },
    { id: "n3", width: 200, height: 150 },
    { id: "n4", width: 200, height: 150 },
    { id: "n5", width: 200, height: 150 },
    { id: "n6", width: 200, height: 150 },
    { id: "n7", width: 200, height: 150 },
    { id: "n8", width: 200, height: 150 }
  ],
  edges: [
    { id: "e1", sources: ["n1"], targets: ["n2"] },
    { id: "e2", sources: ["n1"], targets: ["n3"] },
    { id: "e3", sources: ["n1"], targets: ["n4"] },
    { id: "e4", sources: ["n2"], targets: ["n4"] },
    { id: "e5", sources: ["n3"], targets: ["n4"] },
    { id: "e6", sources: ["n2"], targets: ["n5"] },
    { id: "e7", sources: ["n6"], targets: ["n1"] },
    { id: "e8", sources: ["n2"], targets: ["n7"] },
    { id: "e9", sources: ["n6"], targets: ["n8"] }
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
