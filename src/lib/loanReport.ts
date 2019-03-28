/**
 * Calculates principal collected and interest paid as well as loan left
 * for the given number of payment periods
 * @param loan - mortgage amount
 * @param rate - mortgage rate (%)
 * @param payment - monthly mortgage payment
 * @param periods - number of periods (months)
 */
import { Property } from './constants'
import { loanPayment } from "./loanPayment"

interface LoanReport {
  principal: number
  interest: number
  loan: number
}

export function loanReport(property: Property): LoanReport[] {
  let loan = property.price - property.down
  const report = []
  const mr = property.rate / (12 * 100)
  const years = property.years
  const payment = loanPayment(property)

  for (let j = 0; j < years; j++) {
    let interest = 0
    let principal = 0
    for (let i = 0; i < 12; i++) {
      const periodInterest = loan * mr
      interest += periodInterest
      const periodPrincipal = payment - periodInterest
      principal += periodPrincipal
      loan -= periodPrincipal
    }
    report.push({ interest, principal, loan })
  }
  return report
}
