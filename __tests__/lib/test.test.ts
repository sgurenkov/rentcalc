import { Property } from '../../src/lib/constants'
import { propertyReport } from '../../src/lib/propertyReport'
import { calculateTax } from '../../src/lib/calculateTax'

const data: {
  salary: number
  pretax: number
  properties: Property[]
} = {
  salary: 152000,
  pretax: 19000 + 5000 + 2500,
  properties: [
    {
      price: 565000,
      down: 113000,
      rate: 4.2,
      years: 30,
      hoa: 0,
      income: 0,
      marketGrowth: 3,
    },
    // {
    //   price: 350000,
    //   down: 70000,
    //   rate: 4.5,
    //   years: 30,
    //   hoa: 295,
    //   income: 1900,
    //   marketGrowth: 3,
    // },
    // {
    //   price: 430000,
    //   down: 86000,
    //   rate: 4.5,
    //   years: 30,
    //   hoa: 305,
    //   income: 2300,
    //   marketGrowth: 3,
    // },
  ],
}

describe('testas sdfasdf', () => {
  it('test asdfasd', () => {
    const years = 10
    let netWorthTotal = 0
    let expenseTotal = 0
    let profitTotal = 0
    let mPaymentsTotal = Array(years).fill(0)
    let incomeTax = Array(years).fill(0)
    for (let i = 0; i < data.properties.length; i++) {
      const property = data.properties[i]
      const { netWorth, expense, profit, monthlyPayments, rentIncomes } = propertyReport(
        property,
        years
      )
      netWorthTotal += netWorth
      expenseTotal += expense
      profitTotal += profit
      for (let j = 0; j < monthlyPayments.length; j++) {
        mPaymentsTotal[j] += monthlyPayments[j]
        incomeTax[j] +=
          calculateTax(data.salary + rentIncomes[j], data.pretax, 2) -
          calculateTax(data.salary, data.pretax, 2)
      }
    }
    console.log({
      monthlyPayments: mPaymentsTotal,
      incomeTax,
      netWorthTotal,
      expenseTotal,
      profitTotal,
    })
    expect(true).toBeTruthy()
  })
})
