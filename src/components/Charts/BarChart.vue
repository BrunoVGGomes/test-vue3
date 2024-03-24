<template>
  <apexchart :series="barData" :options="optionBarChart" type="bar">
  </apexchart>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  series: Array,
  legends: Array,
});

const barData = computed(() => {
  return props.series.map((series, i) => {
    return {
      name: props.legends[i],
      data: [
        {
          x: "",
          y: series,
        },
      ],
    };
  });
});

const optionBarChart = {
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  colors: ["#26C281", "#4B77BE", "#E43A45"],
  legend: {
    labels: {
      colors: "#ffffff",
    },
  },
  yaxis: {
    title: {
      text: "kCO2e",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " kCO2e";
      },
    },
  },
};
</script>

<style>
.apexcharts-tooltip {
  color: rgb(95, 95, 95);
}
</style>
