import { defineStore } from "pinia";
import { reactive } from "vue";

interface IResult {
  id: number;
  entityId: number;
  categoryId: number;
  kco2e: number;
}

export const useResultsStore = defineStore("results", () => {
  const results = reactive<IResult[]>([
    { id: 1, entityId: 1, categoryId: 2, kco2e: 1000 },
    { id: 2, entityId: 1, categoryId: 1, kco2e: 500 },
    { id: 3, entityId: 2, categoryId: 2, kco2e: 800 },
    { id: 4, entityId: 2, categoryId: 4, kco2e: 400 },
    { id: 5, entityId: 2, categoryId: 2, kco2e: 200 },
    { id: 6, entityId: 3, categoryId: 2, kco2e: 1050 },
    { id: 7, entityId: 3, categoryId: 3, kco2e: 500 },
  ]);

  const takeHigherResultId = (): number => {
    return results.reduce((acc, result) => (result.id > acc ? result.id : acc), -Infinity);
  }

  const validateResult = (newResult: IResult) => {
    return newResult.entityId !== undefined && newResult.categoryId !== undefined;
  };

  const addResult = (newResult: IResult) => {
    if (!validateResult(newResult)) return;

    results.unshift({ ...newResult, id: takeHigherResultId() + 1 });
  }

  const removeResult = (id: number) => {
    const index = results.findIndex((result) => result.id === id);
    results.splice(index, 1);
  }

  return {
    results,
    addResult,
    removeResult,
  };
});
