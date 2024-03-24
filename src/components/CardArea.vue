<template>
  <div class="card">
    <h3 v-if="$slots.title" class="pb-1">
        <slot name="title"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<style class="scss">
@import "@/assets/base.scss";

.card {
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  background-color: var(--vt-c-indigo);
}
</style>
