<template>
  <div v-if="results.length" class="filter-area">
    <select v-model="data.reference" class="input-inline mr-1">
      <option value="organizations">Organizations</option>
      <option value="catergories">Categories</option>
    </select>

    <span>
      <button
        :class="[
          !data.show.barChart ? 'btn-default' : 'btn-success',
          'btn-inline mr-1',
        ]"
        @click="data.show.barChart = !data.show.barChart"
      >
        Bar Chart
      </button>
      <button
        :class="[
          !data.show.donutChart ? 'btn-default' : 'btn-success',
          'btn-inline mr-1',
        ]"
        @click="data.show.donutChart = !data.show.donutChart"
      >
        Donut Chart
      </button>
    </span>
  </div>

  <div v-if="results.length" class="chart-area">
    <card-area v-show="data.show.donutChart" class="w-sm-100">
      <template #title> Emissions by {{ referenceName }} </template>
      <donut-chart
        v-if="displayChart"
        :series="allValues"
        :legends="allLabels"
        :key="data.key"
      />
    </card-area>
    
    <card-area
      v-show="data.show.barChart"
      :class="[{ 'flex-grow': data.show.donutChart }, 'w-sm-100']"
    >
      <template #title> Emissions by {{ referenceName }} </template>
      <bar-chart
        v-if="displayChart"
        :series="allValues"
        :legends="allLabels"
        :key="data.key"
      />
    </card-area>
  </div>
</template>

<script setup>
import { reactive, ref, watch, onMounted, computed } from "vue";
import { useOrganizationsStore } from "@/stores/organizations";
import { useResultsStore } from "@/stores/results";
import { useCategoriesStore } from "@/stores/categories";
import BarChart from "@/components/Charts/BarChart.vue";
import DonutChart from "@/components/Charts/DonutChart.vue";
import DataList from "@/components/DataList.vue";
import CardArea from "@/components/CardArea.vue";

const resultsStore = useResultsStore();
const results = resultsStore.results;
const organizationsStore = useOrganizationsStore();
const organizations = organizationsStore.organizations;
const categoriesStore = useCategoriesStore();
const categories = categoriesStore.categories;
const data = reactive({
  key: 0,
  reference: "organizations",
  show: {
    barChart: true,
    donutChart: true,
  },
});
const dataReference = computed(() => {
  return data.reference === "organizations" ? organizations : categories;
});

const propReference = computed(() => {
  return data.reference === "organizations" ? "entityId" : "categoryId";
});

const referenceName = computed(() => {
  return data.reference === "organizations" ? "Organization" : "Category";
});

const totalData = computed(() => {
  const totalsWithOrganizationName = {};

  results.forEach((item) => {
    if (!totalsWithOrganizationName[item[propReference.value]]) {
      const organization = dataReference.value.find(
        (org) => org.id === item[propReference.value],
      );
      const entityName = organization ? organization.name : "Unknown";
      totalsWithOrganizationName[item[propReference.value]] = {
        name: entityName,
        total: 0,
      };
    }
    totalsWithOrganizationName[item[propReference.value]].total += item.kco2e;
  });

  return Object.values(totalsWithOrganizationName);
});

const allLabels = computed(() => totalData.value.map((item) => item.name));
const allValues = computed(() => totalData.value.map((item) => item.total));
const displayChart = computed(
  () => allLabels.value?.length && allValues.value?.length,
);

watch(totalData, () => {
  data.key += 1;
});
</script>

<style scoped lang="scss">
.filter-area {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  gap: 1rem;
}
.chart-area {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: fit-content;
  justify-content: space-between;
}
</style>
