export const FED_STANDARD_DEDUCTION: number = 24200
/**
 * Phases out if adjusted gross income is over 400,000 (married)
 */
export const FED_CHILD_TAX_CREDIT: number = 2000

/**
 * Federal tax brackets filing jointly 2019
 */
export const FED_TAX_BRACKETS: [number, number][] = [
  [0, 10],
  [1940, 12],
  [78950, 22],
  [168400, 24],
  [321450, 32],
  [408200, 35],
  [612350, 37],
]

export const CA_STANDARD_DEDUCTION: number = 8802
export const CA_DEPENDENT_DEDUCTION = 1050
/**
 * California tax brackets filing jointly 2019
 */
export const CA_TAX_BRACKETS: [number, number][] = [
  [0, 1],
  [16446, 2],
  [38990, 4],
  [61538, 6],
  [85422, 8],
  [107960, 9.3],
  [551476, 10.3],
  [661768, 11.3],
  [1000000, 12.3],
  [1074996, 13.3],
]

export interface Property {
  price: number
  down: number
  rate: number
  years: number
  hoa: number
  income: number
  marketGrowth: number
}

export const RENT_YEARLY_INCREASE = 3
export const CLOSING_COST_RATE = 3.5
