export type TIndexed<T = unknown> = {
  [key in string]: T;
};

export function merge(lhs: TIndexed, rhs: TIndexed): TIndexed {
  for (const p in rhs) {
      if (!Object.prototype.hasOwnProperty.call(rhs, p)) {
          continue;
      }
      lhs[p] = rhs[p];
  }

  return lhs;
}
