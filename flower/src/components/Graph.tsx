import React, { FC, useEffect, useState } from "react";

import Slider from "./Slider";
import GraphHtml from "./GraphHtml";
import GraphSvg from "./GraphSvg";

// const sectionLine = ({ startPoint, endPoint, bendPoints = [] }: any) => {
//   const makeLine = line().curve(curveCardinal.tension(0.92));
//   const start: [number, number] = [startPoint.x, startPoint.y];
//   const end: [number, number] = [endPoint.x, endPoint.y];

//   if (bendPoints.length) {
//     return makeLine([start, ...bendPoints.map(({ x, y }: any) => [x, y]), end]);
//   }

//   return makeLine([start, end]);
// };

// const GraphHtml = ({ layout, zoom = 1 }: any) => {
//   const { width, height, children, edges } = layout;
//   const [{ activeNodeIndex }, dispatch] = useUiContext();

//   return (
//     <div
//       style={{
//         width: `${width}px`,
//         height: `${height}px`,
//         transform: `scale(${zoom})`
//       }}
//     >
//       {edges && (
//         <svg width={width} height={height} style={{ position: "absolute" }}>
//           {edges.map(({ sections }: any, i: number) => (
//             <g key={i}>
//               {sections.map((s: any, j: number) => (
//                 <path
//                   key={j}
//                   d={sectionLine(s) || ""}
//                   opacity="0.1"
//                   strokeWidth="3"
//                   stroke="black"
//                   fill="none"
//                 />
//               ))}
//             </g>
//           ))}
//         </svg>
//       )}
//       {children &&
//         children.map((node: any, i: number) => (
//           <div
//             key={i}
//             style={{
//               position: "absolute",
//               top: `${node.y}px`,
//               left: `${node.x}px`,
//               width: `${node.width}px`,
//               height: `${node.height}px`
//             }}
//           >
//             <GraphCard
//               node={node}
//               active={activeNodeIndex == i}
//               onClick={() =>
//                 dispatch({ type: "activeNodeIndex", activeNodeIndex: i })
//               }
//             />
//           </div>
//         ))}
//     </div>
//   );
// };

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
