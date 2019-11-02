import React, { FC, useState, useEffect } from "react";
import ELK from "elkjs/lib/elk.bundled.js";

import Layout from "../containers/Layout";
import GraphLayoutHtml from "../components/GraphLayoutHtml";
import GraphLayoutSvg from "../components/GraphLayoutSvg";
import Slider from "../components/Slider";

import { randomNodes, randomEdges } from "../data/graph";

import { useUiContext } from "../contexts/ui";

// https://github.com/OpenKieler/elkjs

const elk = new ELK();

const graph = {
  id: "root",
  layoutOptions: {
    "elk.algorithm": "layered"
  },
  children: randomNodes(20, { width: 200, height: 105 }),
  edges: randomEdges(20)
};

const GraphRoute: FC = () => {
  const [layout, setLayout] = useState({ children: [] });
  const [{ activeNodeIndex }, dispatch] = useUiContext();

  useEffect(() => {
    const generateGraph = async () => {
      const elkLayout = await elk.layout(graph);
      setLayout(elkLayout);
    };
    generateGraph();
  }, []);

  const [zoom, setZoom] = useState(1);

  return (
    <Layout
      details={
        activeNodeIndex !== -1 &&
        layout &&
        layout.children && (
          <pre>{JSON.stringify(layout.children[activeNodeIndex], null, 2)}</pre>
        )
      }
    >
      <GraphLayoutHtml layout={layout} zoom={zoom} />
      {/* <GraphLayoutSvg layout={layout} /> */}
      {/* <pre>{JSON.stringify(layout, null, 2)}</pre> */}
      <div
        style={{
          position: "fixed",
          left: "220px",
          bottom: "20px",
          width: "200px"
        }}
      >
        <Slider
          value={zoom}
          min={0.3}
          max={1}
          step={0.01}
          onChange={(zoom: number) => setZoom(zoom)}
        />
      </div>
    </Layout>
  );
};

export default GraphRoute;
