import { Period, resolveValue } from "../../src/lib/resolveValue"

describe("resolveValue", () => {
  it("resolves year value to itself", () => {
    expect(resolveValue(10.0, Period.Y)).toEqual(10.0)
  })
  it("resolves month value", () => {
    expect(resolveValue(1.0, Period.M)).toEqual(12.0)
  })
  it("resolves biweekly value", () => {
    expect(resolveValue(1.0, Period.B)).toEqual(26.0)
  })
  it("resolves weekly value", () => {
    expect(resolveValue(1.0, Period.W)).toEqual(52.0)
  })
  it("resolves daily value", () => {
    expect(resolveValue(1.0, Period.D)).toEqual(365.0)
  })
})
