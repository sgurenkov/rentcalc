import { calculateBrackets } from '../../src/lib/calculateBrackets'

describe('calculateBrackets()', () => {
  it('value is in the lowest range', () => {
    const brackets: [number, number][] = [[0, 10], [1000, 15]]
    expect(calculateBrackets(500, brackets)).toEqual(50)
  })
  it('value is in the middle of the ranges', () => {
    const brackets: [number, number][] = [[0, 10], [1000, 15]]
    expect(calculateBrackets(1500, brackets)).toEqual(175)
  })
  it('value is in the middle of the ranges', () => {
    const brackets: [number, number][] = [[0, 10], [1000, 15], [10000, 20], [50000, 30], [80000, 45]]
    expect(calculateBrackets(55000, brackets)).toEqual(10950)
  })
})
