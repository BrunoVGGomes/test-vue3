<template>
  <input v-model="value" :type="type" />
</template>

<script setup>
const value = defineModel({
  prop: "value",
  event: "input",
});
</script>
