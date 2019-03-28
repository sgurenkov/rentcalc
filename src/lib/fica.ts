/**
 * Calculates FICA tax
 * @param grossIncome
 */
import { percent } from './percent'

const SS_TAX_RATE = 6.2
const SS_MAX_WAGE = 132900
const MEDICARE_TAX_RATE1 = 1.45
const MEDICARE_TAX_RATE2 = 2.35
const MEDICARE_THRESHOLD = 250000 // failing jointly

export function fica(grossIncome: number): number {
  const socialSecurity = Math.min(
    percent(SS_MAX_WAGE, SS_TAX_RATE),
    percent(grossIncome, SS_TAX_RATE)
  )
  const medicare =
    grossIncome > MEDICARE_THRESHOLD
      ? percent(MEDICARE_THRESHOLD, MEDICARE_TAX_RATE1) +
        percent(grossIncome - MEDICARE_THRESHOLD, MEDICARE_TAX_RATE2)
      : percent(grossIncome, MEDICARE_TAX_RATE1)
  return socialSecurity + medicare
}
