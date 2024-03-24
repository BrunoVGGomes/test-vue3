<template>
  <select v-model="value" placeholder="Select Category">
    <option
      v-for="category in categories"
      :key="category.id"
      :value="category.id"
    >
      {{ category.name }}
    </option>
  </select>
</template>

<script setup>
import { useCategoriesStore } from "@/stores/categories";
import { ref } from "vue";

const categoriesStore = useCategoriesStore();
const categories = categoriesStore.categories;

const value = defineModel({
  prop: "value",
  event: "change",
});
</script>
