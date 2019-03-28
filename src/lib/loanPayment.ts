/**
 * Calculate mortgage monthly payment
 * @param loan - mortgage loan amount
 * @param rate - mortgage rate (percent value)
 * @param periods - number of month for the loan
 */
import { Property } from "./constants"

export function loanPayment(property: Property) {
  const r = property.rate / (100 * 12)
  const loan = property.price - property.down
  const periods = property.years * 12
  return loan / ((1 - Math.pow(1 + r, - periods)) / r)
}
