<script setup lang="ts">
import { computed } from 'vue'
import { useCounter } from '../hooks/useCounter'

const { counterState, increment, decrement } = useCounter()

const counter = computed(() => counterState.count)
</script>
<template>
  <div class="py-3">
    <div class="text-sm font-light text-stone-600">Counter {{ counter }}</div>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<style scoped></style>
