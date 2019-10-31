import React, { FC, useEffect } from "react";
import { line, curveCardinal } from "d3-shape";
import { relative } from "path";
import GraphCard from "./GraphCard";

const sectionLine = ({ startPoint, endPoint, bendPoints = [] }: any) => {
  const makeLine = line().curve(curveCardinal.tension(0.8));
  const start: [number, number] = [startPoint.x, startPoint.y];
  const end: [number, number] = [endPoint.x, endPoint.y];

  if (bendPoints.length) {
    return makeLine([start, ...bendPoints.map(({ x, y }: any) => [x, y]), end]);
  }

  return makeLine([start, end]);
};

const GraphHtml = ({ layout }: any) => {
  const { width, height, children, edges } = layout;
  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        transform: "scale(1)"
      }}
    >
      {edges && (
        <svg width={width} height={height} style={{ position: "absolute" }}>
          {edges.map(({ sections }: any, i: number) => (
            <g key={i}>
              {sections.map((s: any, j: number) => (
                <path
                  key={j}
                  d={sectionLine(s) || ""}
                  opacity="0.1"
                  stroke-width="3"
                  stroke="black"
                  fill="none"
                />
              ))}
            </g>
          ))}
        </svg>
      )}
      {children &&
        children.map(({ x, y, width, height }: any, i: number) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${y}px`,
              left: `${x}px`,
              width: `${width}px`,
              height: `${height}px`
            }}
          >
            <GraphCard> This is a {i + 1}th HTML box and it is fine</GraphCard>
          </div>
        ))}
    </div>
  );
};

const GraphSvg = ({ layout }: any) => {
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
                fill="white"
              />
              <text x={x + 10} y={y + 20}>
                This is a {i + 1}th SVG box...
              </text>
            </g>
          ))}
        {edges &&
          edges.map(({ sections }: any, i: number) => (
            <g key={i}>
              {sections.map((s: any, j: number) => (
                <g key={j}>
                  <path
                    d={sectionLine(s) || ""}
                    opacity="0.1"
                    stroke-width="3"
                    stroke="black"
                    fill="none"
                  />
                  <circle
                    cx={s.startPoint.x}
                    cy={s.startPoint.y}
                    r="4"
                    fill="black"
                    opacity="0.5"
                  />
                  <circle
                    cx={s.endPoint.x}
                    cy={s.endPoint.y}
                    r="4"
                    fill="black"
                    opacity="0.5"
                  />
                  {s.bendPoints &&
                    s.bendPoints.map(({ x, y }: any, k: number) => (
                      <circle
                        key={k}
                        cx={x}
                        cy={y}
                        r="5"
                        fill="none"
                        stroke="royalblue"
                        stroke-width="3"
                        opacity={0.8}
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

const Graph: FC<{ layout: any }> = ({ layout }) => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <GraphHtml layout={layout} />
      <GraphSvg layout={layout} />
      <pre>{JSON.stringify(layout, null, 2)}</pre>
    </div>
  );
};

export default Graph;
