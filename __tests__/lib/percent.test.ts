import { percent } from "../../src/lib/percent"

describe("percent()", () => {
  it("returns 0 for incorrect values", () => {
    expect(percent(100, -5)).toEqual(0)
    expect(percent(0, 5)).toEqual(0)
  })
  it("calculates percent value", () => {
    expect(percent(100, 34)).toEqual(34)
  })
})
