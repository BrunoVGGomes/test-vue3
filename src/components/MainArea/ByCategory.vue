<template>
  <card-area>
    <BarChart
      v-if="data.key"
      :series="data.series"
      :legends="data.legend"
      :key="key"
    />
  </card-area>

  <card-area>
    <DonutChart
      v-if="data.key"
      :series="data.series"
      :legends="data.legend"
      :key="key"
    />
  </card-area>
</template>

<script setup>
import { reactive, ref, watch, onMounted } from "vue";
import { useOrganizationsStore } from "@/stores/organizations";
import { useResultsStore } from "@/stores/results";
import BarChart from "@/components/Charts/BarChart.vue";
import DonutChart from "@/components/Charts/DonutChart.vue";
import CardArea from "@/components/CardArea.vue";

const resultsStore = useResultsStore();
const results = resultsStore.results;
const organizationsStore = useOrganizationsStore();
const organizations = organizationsStore.organizations;

const resultData = reactive(resultsStore.data);

const key = ref(0);

const data = reactive({
  resultData: null,
  series: null,
  legend: null,
  key: 0,
});

const setData = () => {
  data.resultData = results
    .map((r) => {
      return {
        kco2e: r.kco2e,
        organization: organizations.find((o) => o.id == r.entityId).name,
      };
    })
    .reduce((sum, { kco2e, organization }) => {
      sum[organization] = sum[organization] || { organization, kco2e: 0 };
      sum[organization].kco2e += kco2e;
      return sum;
    }, {});

  data.series = reactive(Object.values(data.resultData).map((d) => d.kco2e));

  data.legend = reactive(Object.keys(data.resultData));

  data.key += 1;
};

onMounted(() => {
  setData();
});

watch(resultData, () => {
  setData();
});
</script>

<style scoped>
.chart-area {
  display: flex;
  gap: 2rem;
  height: fit-content;
}
</style>
