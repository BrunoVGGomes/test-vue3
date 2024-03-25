import { defineStore } from 'pinia'

interface IOrganization {
  id: number;
  name: string;
  numberOfEmployees: number;
  turnover: number;
}

export const useOrganizationsStore = defineStore('organizations', () => {
  const organizations: IOrganization[] = [
    {id: 1, name: 'Climateseed', numberOfEmployees: 100, turnover: 1000000000},
    {id: 2, name: 'Acme Corp', numberOfEmployees: 10, turnover: 20000},
    {id: 3, name: 'Fast Co2', numberOfEmployees: 50, turnover: 35000}
  ]

  return {
    organizations,
  }
})
