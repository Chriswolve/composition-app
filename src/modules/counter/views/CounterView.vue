<script setup lang="ts">
  import CounterLayout from '../layouts/CounterLayout.vue'
  import Counter from '../components/BasicCounter.vue'
</script>

<template>
  <CounterLayout>
    <p class="my-2 text-sm font-thin text-zinc-500">
      The Counter component is a reusable Vue.js component designed to allow
      users to increment and decrement a numerical value seamlessly
    </p>
    <Counter />
  </CounterLayout>
</template>

<style lang="scss" scoped></style>
