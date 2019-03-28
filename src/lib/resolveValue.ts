export enum Period {
  Y, M, D, W, B
}

/**
 * calculate value for the year base
 * @param value
 * @param period
 */
export function resolveValue(value: number, period: Period): number {
  switch (period) {
    case Period.Y:
      return value
    case Period.M:
      return value * 12
    case Period.B:
      return value * 26
    case Period.W:
      return value * 52
    case Period.D:
      return value * 365
  }
}
