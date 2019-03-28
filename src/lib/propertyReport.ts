/**
 * Calculates principal collected and interest paid as well as loan left
 * for the given number of payment periods
 * @param loan - mortgage amount
 * @param rate - mortgage rate (%)
 * @param payment - monthly mortgage payment
 * @param periods - number of periods (months)
 */
import { CLOSING_COST_RATE, Property } from './constants'
import { rentalIncome } from "./rentalIncome"
import { loanReport } from "./loanReport"
import { monthlyPayment } from "./monthlyPayment"
import { rentIncomeAppreciated } from "./rentIncomeAppreciated"

interface PropertyReport {
  netWorth: number,
  expense: number,
  profit: number,
  monthlyPayments: number[],
  rentIncomes: number[]
}

export function propertyReport(property: Property, years: number): PropertyReport {
  const rentIncome = rentalIncome(property)
  const loanData = loanReport(property)
  const mPayment = monthlyPayment(property)
  const { loan } = loanData[years - 1]
  const netWorth = property.price * Math.pow(1 + property.marketGrowth / 100, years) - loan
  let expense = property.down + property.price * CLOSING_COST_RATE / 100
  const monthlyPayments = []
  const rentIncomes = []

  for (let i = 1; i <= years; i++) {
    const value = (mPayment - rentIncomeAppreciated(property.income, i)) * 12 + rentIncome[i - 1] * 0.37 // FIXME: 0.37 - this should be real tax
    expense += value
    monthlyPayments.push(mPayment - rentIncomeAppreciated(property.income, i))
    rentIncomes.push(rentIncomeAppreciated(property.income, i))
  }
  return {
    netWorth,
    expense,
    profit: netWorth - expense,
    monthlyPayments,
    rentIncomes
  }
}
