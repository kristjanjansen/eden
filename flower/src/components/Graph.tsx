import React, { FC, useEffect } from "react";
import { line, curveBundle } from "d3-shape";
import { relative } from "path";

const sectionLine = ({ startPoint, endPoint, bendPoints = [] }: any) => {
  const makeLine = line().curve(curveBundle.beta(1));
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
        background: "gray"
      }}
    >
      {children &&
        children.map(({ x, y, width, height }: any, i: number) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${y}px`,
              left: `${x}px`,
              width: `${width}px`,
              height: `${height}px`,
              background: "red",
              border: "1px solid black",
              opacity: 0.5,
              padding: "10px"
            }}
          >
            {i}
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
                  {/* <line
                    x1={s.startPoint.x}
                    y1={s.startPoint.y}
                    x2={s.endPoint.x}
                    y2={s.endPoint.y}
                    opacity="0.5"
                    stroke={["red", "green", "blue", "yellow"][i]}
                  /> */}
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
      <br />
      <br />
      <GraphSvg layout={layout} />
      <pre>{JSON.stringify(layout, null, 2)}</pre>
    </div>
  );
};

export default Graph;
