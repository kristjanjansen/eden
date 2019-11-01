import { flatten, random, any } from "../utils/utils";

const statuses = ["pending", "processing", "done", "cancelled", "error"];
const types = ["build", "deploy", "run", "test"];
const services = ["api", "vote", "db", "result", "redis", "javaworker"];

export const randomNodes = (count = 10, options) =>
  Array.from({ length: count }).map((_, i) => ({
    id: `n${i + 1}`,
    width: options ? options.width : 100,
    height: options ? options.height : 100,
    type: any(types),
    status: any(statuses),
    service: any(services)
  }));

export const randomEdges = (count = 10) =>
  Array.from({ length: count })
    .map((_, i) => {
      const targetNode = random(1, count);
      return {
        id: `e${i + 1}`,
        sources: [`n${i + 1}`],
        targets: targetNode !== i ? [`n${targetNode}`] : null
      };
    })
    .filter(e => e.targets);
