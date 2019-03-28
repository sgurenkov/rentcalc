import { fica } from './fica'
import {
  CA_DEPENDENT_DEDUCTION,
  CA_STANDARD_DEDUCTION,
  CA_TAX_BRACKETS,
  FED_CHILD_TAX_CREDIT,
  FED_STANDARD_DEDUCTION,
  FED_TAX_BRACKETS,
} from './constants'
import { calculateBrackets } from './calculateBrackets'

export function calculateTax(
  grossIncome: number,
  pretax: number,
  nChildren: number = 0,
  deductions?: number,
) {
  const ficaTax = fica(grossIncome)
  const fedDeduction = deductions ? deductions : FED_STANDARD_DEDUCTION
  const fedTaxableIncome = grossIncome - pretax - ficaTax - fedDeduction
  const fedTax =
    calculateBrackets(fedTaxableIncome, FED_TAX_BRACKETS) - FED_CHILD_TAX_CREDIT * nChildren

  const caDeduction = deductions ? deductions : CA_STANDARD_DEDUCTION
  const caTaxableIncome =
    grossIncome - pretax - ficaTax - caDeduction - CA_DEPENDENT_DEDUCTION * (nChildren + 1)
  const caTax = calculateBrackets(caTaxableIncome, CA_TAX_BRACKETS)

  return fedTax + caTax + ficaTax
}
