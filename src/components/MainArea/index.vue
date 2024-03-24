<template>
  <div class="container">
    <div class="list-area">
      <DataList />
    </div>
    <div class="chart-area flex-grow p-1">
      <TotalCharts />
    </div>
  </div>
</template>

<script setup>
import { useOrganizationsStore } from "@/stores/organizations";
import { useResultsStore } from "@/stores/results";
import TotalCharts from "./TotalCharts.vue";
import DataList from "@/components/DataList.vue";

const resultsStore = useResultsStore();
const results = resultsStore.results;
</script>

<style scoped lang="scss">
@import "@/assets/base.scss";

@media only screen and (max-width: $breakpoint-sm) {
  .container {
    .list-area {
      order: 2;
    }
    .chart-area {
      order: 1;
    }
  }
}
</style>
