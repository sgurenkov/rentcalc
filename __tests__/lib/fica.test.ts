import { fica } from "../../src/lib/fica"

describe("fica()", () => {
  it("gross income is less than both thresholds", () => {
    expect(fica(100000)).toEqual(7650)
  })
  it("gross income is more then ss threshold", () => {
    expect(fica(150000)).toEqual(10414.8)
  })
  it("gross income is more then both thresholds", () => {
    expect(fica(300000)).toEqual(13039.8)
  })
})
