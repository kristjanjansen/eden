import { flatten, random, any } from "../utils/utils";

const modules = ["postgres", "mysql", "mariadb", "redis", "mongodb"];
const services = ["storage", "db", "backupdb", "store", "cache", "db2"];
const states = ["build", "deploy", "run", "test"];
const statuses = ["pending", "processing", "done", "cancelled", "error"];

export const randomGraph = (
  options = { count: 10, width: 100, height: 100 }
) => ({
  nodes: Array.from({ length: options.count }).map((_, i) => ({
    id: `n${i + 1}`,
    width: options.width,
    height: options.height,
    module: any(modules),
    service: any(services),
    state: any(states),
    status: any(statuses)
  })),
  edges: Array.from({ length: options.count })
    .map((_, i) => {
      const targetNode = random(1, options.count);
      return {
        id: `e${i + 1}`,
        sources: [`n${i + 1}`],
        targets: targetNode !== i ? [`n${targetNode}`] : null
      };
    })
    .filter(e => e.targets)
});
