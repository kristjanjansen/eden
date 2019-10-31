import React, { FC, useEffect } from "react";
import { line } from "d3-shape";

const GraphSvg = ({ layout }: any) => {
  const { width, height, children, edges } = layout;
  if (children)
    return (
      <svg
        width={width}
        height={height}
        style={{ transform: "scale(2)", background: "gray" }}
      >
        {children &&
          children.map(({ x, y, width, height }: any, i: number) => (
            <rect
              key={i}
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
        {edges &&
          edges.map(({ sections }: any, i: number) => (
            <g key={i}>
              {sections.map(({ startPoint, endPoint }: any, j: number) => (
                <g key={i}>
                  <circle
                    cx={startPoint.x}
                    cy={startPoint.y}
                    r="3"
                    fill="blue"
                    opacity={1 / (i + 1)}
                  />
                  <circle
                    cx={endPoint.x}
                    cy={endPoint.y}
                    r="3"
                    fill="green"
                    opacity={1 / (i + 1)}
                  />
                </g>
              ))}
            </g>
          ))}
      </svg>
    );
  return <div></div>;
};

// const calculateLines = (edges: any) => {
//   return edges.map(({ sections }: any) => {
//     if (sections.bendPoints) {

//     }
//     return [e.sections
//   });
// };

const Graph: FC<{ layout: object }> = ({ layout }) => {
  return (
    <div>
      <GraphSvg layout={layout} />
      <pre>{JSON.stringify(layout, null, 2)}</pre>
    </div>
  );
};

export default Graph;
