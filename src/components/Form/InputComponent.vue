<template>
  <input v-model="value" />
</template>

<script setup>
const value = defineModel({
  prop: "value",
});
</script>
