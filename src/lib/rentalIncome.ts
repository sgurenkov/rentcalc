/**
 * Calculate full monthly payment
 */
import { Property, RENT_YEARLY_INCREASE } from './constants'
import { monthlyPropertyExpenses } from './monthlyPropertyExpenses'
import { loanReport } from './loanReport'
import { rentIncomeAppreciated } from "./rentIncomeAppreciated"

export function rentalIncome(property: Property): number[] {
  const report = loanReport(property)
  const expenses = monthlyPropertyExpenses(property) * 12
  const income = property.income * 12
  return report.map(
    (item, i) => rentIncomeAppreciated(income, i + 1) - expenses - item.interest
  )
}
