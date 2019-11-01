import { flatten, random, any } from "../utils/utils";

const modules = ["postgres", "mysql", "mariadb", "redis", "mongodb"];
const services = ["storage", "db", "backupdb", "store", "cache", "db2"];
const states = ["build", "deploy", "run", "test"];
const statuses = ["pending", "processing", "done", "cancelled", "error"];

export const randomNodes = (count = 10, options) =>
  Array.from({ length: count }).map((_, i) => ({
    id: `n${i + 1}`,
    width: options ? options.width : 100,
    height: options ? options.height : 100,
    module: any(modules),
    service: any(services),
    state: any(states),
    status: any(statuses)
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
