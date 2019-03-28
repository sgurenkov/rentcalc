/**
 * Calculate monthly property expenses which can be deducted for tax purposes
 */
import { Property } from './constants'

const HOME_INSURANCE = 100
const PROPERTY_TAX_RATE = 1.25

export function monthlyPropertyExpenses(property: Property): number {
  const propertyTax = (property.price * PROPERTY_TAX_RATE) / (12 * 100)
  const pmi = property.down / property.price < 0.2 ? (property.price - property.down) * 0.005 : 0
  return property.hoa + HOME_INSURANCE + propertyTax + pmi
}
