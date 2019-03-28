import { rentIncomeAppreciated } from "../../src/lib/rentIncomeAppreciated"

describe("rentIncomeAppreciated()", () => {
  it("returns initial value for the first year", () => {
    expect(rentIncomeAppreciated(1000, 1)).toEqual(1000)
  })
  it("returns appreciated value according to the rent growth rate", () => {
    expect(rentIncomeAppreciated(1000, 3)).toEqual(1060.9)
  })
})
