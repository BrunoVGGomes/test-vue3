<template>
  <div class="card">
    <h3 v-if="$slots.title" class="pb-1 card__title">
        <slot name="title"></slot>
    </h3>
    <slot></slot>
  </div>
</template>

<style class="scss">
@import "@/assets/base.scss";

:root {
  --card-background: var(--vt-c-grey-4);
  --card-title-color: var(--vt-c-grey-1);
}

@media (prefers-color-scheme: dark) {
  :root {
    --card-title-color: var(--vt-c-grey-4);
    --card-title-color: var(--vt-c-green-1);
  }
}

.card {
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.4s;
  background-color: var(--card-background);

  .card__title {
    color: var(--card-title-color);
    font-size: 1rem;
    font-weight: 500;
  }
}
</style>
