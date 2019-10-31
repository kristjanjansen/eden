import React, { FC, useEffect } from "react";
import { line } from "d3-shape";

const GraphSvg = ({ layout }: any) => {
  const { width, height, children, edges } = layout;
  if (children)
    return (
      <svg width={width} height={height} style={{ background: "gray" }}>
        {children &&
          children.map(({ x, y, width, height }: any) => (
            <rect
              x={x}
              y={y}
              cx="5"
              cy="5"
              width={width}
              height={height}
              stroke="black"
              fill="red"
            />
          ))}
      </svg>
    );
  return <div></div>;
};

const calculateLines = (edges: any) => {
  return edges.map((e: any) => {
    return e;
  });
};

const Graph: FC<{ layout: object }> = ({ layout }) => {
  return (
    <div>
      <GraphSvg layout={layout} />
      <pre>{JSON.stringify(layout, null, 2)}</pre>
    </div>
  );
};

export default Graph;
