/**
 * Calculate full monthly payment
 */
import { Property } from './constants'
import { monthlyPropertyExpenses } from "./monthlyPropertyExpenses"
import { loanPayment } from "./loanPayment"

export function monthlyPayment(property: Property): number {
  return loanPayment(property) + monthlyPropertyExpenses(property)
}
