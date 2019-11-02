import { any } from "../utils/utils";

export const cards = Array.from({ length: 20 }).map((_, i) => {
  const height = any([1, 1, 1, 2]);
  return {
    title: `Card #${i} with ${height} rows of height`,
    height
  };
});
