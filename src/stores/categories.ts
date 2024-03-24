import { defineStore } from "pinia";

interface ICategory {
  id: number;
  name: string;
  categoryId?: number;
  scope?: string;
}

export const useCategoriesStore = defineStore("categories", () => {
  const categories: ICategory[] = [
    { id: 1, name: "Travel", categoryId: null },
    { id: 2, name: "Business travel", categoryId: 1, scope: "Scope 2" },
    { id: 3, name: "Vehicule fleet", categoryId: 1, scope: "Scope 2" },
    { id: 4, name: "Digital", categoryId: null },
    { id: 5, name: "Website", categoryId: 4, scope: "Scope 1" },
    { id: 6, name: "Videoconference", categoryId: 4, scope: "Scope 2" },
    { id: 7, name: "IT Material", categoryId: 4, scope: "Scope 3" },
  ];

  return {
    categories,
  };
});
