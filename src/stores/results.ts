import { defineStore } from "pinia";
import { reactive } from "vue";

interface result {
  id: number;
  entityId: number;
  categoryId: number;
  kco2e: number;
}

export const useResultsStore = defineStore("results", () => {
  const results = reactive([
    { id: 1, entityId: 1, categoryId: 2, kco2e: 1000 },
    { id: 2, entityId: 1, categoryId: 1, kco2e: 500 },
    { entityId: 2, categoryId: 2, kco2e: 800 },
    { entityId: 2, categoryId: 4, kco2e: 400 },
    { entityId: 2, categoryId: 2, kco2e: 200 },
    { entityId: 3, categoryId: 2, kco2e: 1050 },
    { entityId: 3, categoryId: 3, kco2e: 500 },
  ]);

  const takeHigherResultId = (): number => {
    return results.reduce((acc, result: result) => (result.id > acc ? result.id : acc), 0);
  }

  const validateResult = (newResult) => {
    if (newResult.entityId && newResult.categoryId) {
      return true;
    }
    return false;
  };

  const addResult = (newResult) => {
    if (!validateResult(newResult)) return;

    results.unshift({ ...newResult, id: takeHigherResultId() + 1 });
  }

  const removeResult = (id) => {
    const index = results.findIndex((result) => result.id === id);
    results.splice(index, 1);
  }

  return {
    results,
    addResult,
    removeResult,
  };
});
