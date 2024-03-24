import { defineStore } from 'pinia'

export const useOrganizationsStore = defineStore('organizations', () => {
  const organizations = [
    {id: 1, name: 'Climateseed', numberOfEmployees: 100, turnover: 1000000000},
    {id: 2, name: 'Acme Corp', numberOfEmployees: 10, turnover: 20000},
    {id: 3, name: 'Fast Co2', numberOfEmployees: 50, turnover: 35000}
  ]

  return {
    organizations,
  }
})
