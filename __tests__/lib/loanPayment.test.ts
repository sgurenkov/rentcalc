import { loanPayment } from "../../src/lib/loanPayment"
import { loanReport } from "../../src/lib/loanReport"
import { Property } from "../../src/lib/constants"

describe("loanPayment()", () => {
  it("test", () => {
    const property: Property = {
      price: 150000,
      down: 50000,
      years: 30,
      rate: 7,
      hoa: 350,
      income: 0
    }
    expect(Math.floor(loanPayment(property))).toEqual(665)
  })
  it("test payments", () => {
    const property: Property = {
      price: 150000,
      down: 50000,
      years: 30,
      rate: 7,
      hoa: 350,
      income: 0
    }

    const report = loanReport(property)
    const total = report.reduce((ret, item) => {
      ret += item.principal
      return ret
    }, 0)
    expect(Math.round(total)).toEqual(property.price - property.down)
  })
})
