import { calculateTax } from "../../src/lib/calculateTax"
import { fica } from "../../src/lib/fica"
import {
  CA_DEPENDENT_DEDUCTION,
  CA_STANDARD_DEDUCTION,
  CA_TAX_BRACKETS, FED_CHILD_TAX_CREDIT,
  FED_STANDARD_DEDUCTION,
  FED_TAX_BRACKETS,
} from "../../src/lib/constants"
import { calculateBrackets } from "../../src/lib/calculateBrackets"

describe("calculateTax()", () => {
  it("standard deduction", () => {
    const income = 50000
    const fedTaxable = 50000 - 10000 - fica(50000) - FED_STANDARD_DEDUCTION
    const caTaxable = 50000 - 10000 - fica(50000) - CA_STANDARD_DEDUCTION - CA_DEPENDENT_DEDUCTION
    const expected = calculateBrackets(fedTaxable, FED_TAX_BRACKETS) + calculateBrackets(caTaxable, CA_TAX_BRACKETS) + fica(income)
    expect(calculateTax(50000, 10000, 0)).toEqual(expected)
  })

  it("standard deduction with children", () => {
    const income = 80000
    const pretax = 10000
    const fedTaxable = income - pretax - fica(income) - FED_STANDARD_DEDUCTION
    const caTaxable = income - pretax - fica(income) - CA_STANDARD_DEDUCTION - CA_DEPENDENT_DEDUCTION * 3
    const expected = calculateBrackets(fedTaxable, FED_TAX_BRACKETS) + calculateBrackets(caTaxable, CA_TAX_BRACKETS) + fica(income) - FED_CHILD_TAX_CREDIT * 2
    expect(calculateTax(income, pretax, 2)).toEqual(expected)
  })

  it("itemized deductions deduction", () => {
    const income = 150000
    const pretax = 10000
    const deductions = 30000
    const fedTaxable = income - pretax - fica(income) - deductions
    const caTaxable = income - pretax - fica(income) - deductions - CA_DEPENDENT_DEDUCTION
    const expected = calculateBrackets(fedTaxable, FED_TAX_BRACKETS) + calculateBrackets(caTaxable, CA_TAX_BRACKETS) + fica(income)
    expect(calculateTax(income, pretax, 0, deductions)).toEqual(expected)
  })
})
