/**
 * calculates TAX based on provided tax brackets
 * @param income
 * @param brackets
 */
import { percent } from './percent'

export function calculateBrackets(income: number, brackets: [number, number][]): number {
  let tax = 0
  let incomeLeft = income
  for (let i = brackets.length - 1; i >= 0; i--) {
    const [cut, rate] = brackets[i]
    if (incomeLeft > cut) {
      tax += percent(incomeLeft - cut, rate)
      incomeLeft = cut
    }
  }
  return tax
}
