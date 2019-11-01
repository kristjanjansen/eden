export const flatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export const random = (from, to) => {
  const r = from + Math.random() * (to - from);
  return Math.floor(r, 2);
};

export const shuffle = arr => arr.sort(() => Math.random() - 0.5);

export const any = arr => shuffle(arr)[0];

export const snapToGrid = (value, gridsize) => {
  return value % gridsize < gridsize / 2
    ? value - (value % gridsize)
    : value + gridsize - (value % gridsize);
};
