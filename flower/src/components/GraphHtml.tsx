import React, { FC, useEffect, useState } from "react";

import GraphCard from "./GraphCard";
import { useUiContext } from "../contexts/ui";
import { sectionLine } from "../utils/utils";

const GraphHtml = ({ layout, zoom = 1 }: any) => {
  const { width, height, children, edges } = layout;
  const [{ activeNodeIndex }, dispatch] = useUiContext();

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
        children.map((node: any, i: number) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${node.y}px`,
              left: `${node.x}px`,
              width: `${node.width}px`,
              height: `${node.height}px`
            }}
          >
            <GraphCard
              node={node}
              active={activeNodeIndex == i}
              onClick={() =>
                dispatch({ type: "activeNodeIndex", activeNodeIndex: i })
              }
            />
          </div>
        ))}
    </div>
  );
};

export default GraphHtml;
