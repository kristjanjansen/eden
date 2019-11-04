import React, { FC, useState, useEffect } from "react";
import ELK from "elkjs/lib/elk.bundled.js";

import Layout from "../containers/Layout";
import GraphLayoutHtml from "../components/GraphLayoutHtml";
import GraphLayoutSvg from "../components/GraphLayoutSvg";
import Slider from "../components/Slider";

import { useUiContext } from "../contexts/ui";

import { randomGraph } from "../data/graph";

const { nodes, edges } = randomGraph({ count: 20, width: 200, height: 105 });

// https://github.com/OpenKieler/elkjs

const elk = new ELK();

const graph = {
  id: "root",
  layoutOptions: {
    "elk.algorithm": "layered"
  },
  children: nodes,
  edges
};

const GraphRoute: FC = () => {
  const [layout, setLayout] = useState({ children: [] });
  const [{ activeNodeIndex }] = useUiContext();

  // We generate the graph layout using elkjs
  // and pass it to layout variable

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

      {/* Uncomment the following rows to see the debug data */}

      {/* <GraphLayoutSvg layout={layout} /> */}
      {/* <pre>{JSON.stringify(layout, null, 2)}</pre> */}

      {/* Columns / rows controls */}

      <div
        style={{
          position: "fixed",
          left: "220px",
          bottom: "20px",
          width: "200px"
        }}
      >
        <Slider
          title="Zoom"
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
