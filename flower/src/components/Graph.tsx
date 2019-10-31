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
        height: `${height}px`
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
                  opacity="0.25"
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
            <GraphCard>Hello, this is here a plain Html</GraphCard>
          </div>
        ))}
    </div>
  );
};

const GraphSvg = ({ layout }: any) => {
  const { width, height, children, edges } = layout;
  if (children)
    return (
      <svg width={width} height={height} style={{ background: "gray" }}>
        {children &&
          children.map(({ x, y, width, height }: any, i: number) => (
            <g key={i}>
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
              <text x={x + 10} y={y + 20}>
                {i}
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
                    opacity="0.5"
                    stoke-width="2"
                    stroke="red"
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
                  {s.bendpoints &&
                    s.bendPoints.map(({ x, y }: any, k: number) => (
                      <circle
                        key={k}
                        cx={x}
                        cy={y}
                        r="4"
                        fill="black"
                        opacity={0.5}
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
    <div>
      <GraphHtml layout={layout} />
      <GraphSvg layout={layout} />
      <pre>{JSON.stringify(layout, null, 2)}</pre>
    </div>
  );
};

export default Graph;
