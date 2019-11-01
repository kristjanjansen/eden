import React, { FC, useEffect, useState } from "react";
import { line, curveCardinal } from "d3-shape";
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

const GraphHtml = ({ layout, zoom = 1 }: any) => {
  const { width, height, children, edges } = layout;
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `scale(${zoom})`
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
                  strokeWidth="3"
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

const Slider: FC<{
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: Function;
}> = ({ value = 0, min = 0, max = 100, step = 1, onChange = () => null }) => (
  <input
    type="range"
    min={min}
    max={max}
    step={step}
    value={value}
    onChange={e => onChange(parseFloat(e.target.value))}
  />
);

const Graph: FC<{ layout: any }> = ({ layout }) => {
  const [zoom, setZoom] = useState(1);
  return (
    <div>
      <GraphHtml layout={layout} zoom={zoom} />
      {/* <GraphSvg layout={layout} /> */}
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
    </div>
  );
};

export default Graph;
