export function percent(value: number, percent: number): number {
  if (percent < 0) {
    return 0
  }
  return value * percent / 100
}
