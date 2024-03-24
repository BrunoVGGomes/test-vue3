<template>
  <select v-model="value">
    <option v-for="org in organizations" :key="org.id" :value="org.id">
      {{ org.name }}
    </option>
  </select>
</template>

<script setup>
import { useOrganizationsStore } from "@/stores/organizations";

const organizationsStore = useOrganizationsStore();
const organizations = organizationsStore.organizations;

const value = defineModel({
  prop: "value",
  event: "change",
});
</script>
