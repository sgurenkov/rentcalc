import { RENT_YEARLY_INCREASE } from "./constants"

export function rentIncomeAppreciated(income, year) {
  const res = income * Math.pow(1 + (RENT_YEARLY_INCREASE / 100), year - 1)
  return Math.round(res)
}
