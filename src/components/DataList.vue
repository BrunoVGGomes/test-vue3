<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="px-4">Organization</th>
        <th class="px-4">Category</th>
        <th class="px-4 text-right w-md-50">kCO2e</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border px-4">
          <label class="only-sm">Organization</label>
          <SelectOrganization v-model="newModel.entityId" :show-label="true" />
        </td>
        <td class="border px-4">
          <label class="only-sm">Category</label>
          <SelectCategory v-model="newModel.categoryId" :show-label="true" />
        </td>
        <td class="border px-4">
          <label class="only-sm">Total</label>
          <InputComponent
            v-model="newModel.kco2e"
            ref="input"
            type="number"
            class="input-limited-size"
            :show-label="true"
          />
        </td>
        <td class="border px-4 text-right">
          <button
            :disabled="!newModel.kco2e"
            class="btn-success"
            @click="addResult(newModel)"
          >
            ✔ Add New
          </button>
        </td>
      </tr>
      <tr v-for="result in results" :key="result.id">
        <td class="border px-4">
          <SelectOrganization v-model="result.entityId" />
        </td>
        <td class="border px-4">
          <SelectCategory v-model="result.categoryId" />
        </td>
        <td class="border px-4 text-right">
          <InputComponent
            v-model="result.kco2e"
            type="number"
            class="input-limited-size"
            @click.prevent="callRemoveResult"
          />
        </td>
        <td class="border px-4 text-right">
          <button @click.prevent="callRemoveResult" class="btn-danger">
            ✕ Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, computed, reactive, ref } from "vue";
import { useResultsStore } from "@/stores/results";
import SelectOrganization from "@/components/Form/SelectOrganization.vue";
import SelectCategory from "@/components/Form/SelectCategory.vue";
import InputComponent from "@/components/Form/InputComponent.vue";
const resultsStore = useResultsStore();

const results = resultsStore.results;

const newModel = reactive({
  id: null,
  entityId: 1,
  categoryId: 1,
  kco2e: null,
});

const input = ref(null);

const addResult = () => {
  if (!newModel.kco2e) return;

  resultsStore.addResult(newModel);
  newModel.kco2e = null;
};

const callRemoveResult = (result) => {
  resultsStore.removeResult(result);
};
</script>

<style scoped lang="scss">
.data-list {
  overflow-y: auto;
}
</style>
