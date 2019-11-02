import React from "react";
import { generateLine } from "../utils/utils";

const GraphLayoutSvg = ({ layout }: any) => {
  const { width, height, children, edges } = layout;
  if (children)
    return (
      <svg width={width} height={height}>
        {children &&
          children.map(({ x, y, width, height }: any, i: number) => (
            <g key={i}>
              <rect
                x={x}
                y={y}
                rx="5"
                ry="5"
                width={width}
                height={height}
                fill="none"
                stroke="black"
                stroke-width="2"
                opacity={0.2}
              />
              <text x={x + 10} y={y + 20}>
                {i + 1}th SVG rect
              </text>
            </g>
          ))}
        {edges &&
          edges.map(({ sections }: any, i: number) => (
            <g key={i}>
              {sections.map((s: any, j: number) => (
                <g key={j}>
                  <path
                    d={generateLine(s) || ""}
                    opacity="0.1"
                    strokeWidth="3"
                    stroke="black"
                    fill="none"
                  />
                  <circle
                    cx={s.startPoint.x}
                    cy={s.startPoint.y}
                    fill="none"
                    stroke="royalblue"
                    strokeWidth="2"
                    opacity={0.6}
                  />
                  <circle
                    cx={s.endPoint.x}
                    cy={s.endPoint.y}
                    r="4"
                    fill="none"
                    stroke="royalblue"
                    strokeWidth="2"
                    opacity={0.6}
                  />
                  {s.bendPoints &&
                    s.bendPoints.map(({ x, y }: any, k: number) => (
                      <circle
                        key={k}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="none"
                        stroke="royalblue"
                        strokeWidth="2"
                        opacity={0.6}
                      />
                    ))}
                </g>
              ))}
            </g>
          ))}
      </svg>
    );
  return <div></div>;
};

export default GraphLayoutSvg;
