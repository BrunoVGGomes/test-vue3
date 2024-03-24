<template>
  <apexchart :series="series" :options="chartOptions" type="donut"> </apexchart>
</template>

<script setup>
import BarChart from "@/components/Charts/BarChart.vue";

const props = defineProps({
  series: Array,
  legends: Array,
});

const chartOptions = {
  chart: {
    type: "donut",
    stacked: true,
    height: "100%",
    width: "100%",
  },
  colors: ["#26C281", "#4B77BE", "#E43A45"],
  labels: props.legends,
  dataLabels: {
    enabled: false,
  },
  legend: {
    labels: {
      colors: "#ffffff",
    },
  },
  stroke: {
    width: 3,
    colors: ["transparent"],
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: "85%",
        labels: {
          show: true,
          borderRadius: 15,
          total: {
            show: true,
            showAlways: true,
            color: "#ffffff",
          },
          value: {
            color: "#ffffff",
          },
        },
      },
    },
  },
};
</script>
