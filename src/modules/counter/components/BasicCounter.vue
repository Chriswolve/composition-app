<script setup lang="ts">
  import BasicButton from '@shared/components/BasicButton.vue'
  import IconPlus from '@shared/components/icons/IconPlus.vue'
  import IconMinus from '@shared/components/icons/IconMinus.vue'
  import { computed } from 'vue'
  import { useCounter } from '../hooks/useCounter'

  const { counterState, increment, decrement } = useCounter()

  const counter = computed(() => counterState.count)
</script>
<template>
  <div class="py-3">
    <div class="mb-3 text-sm font-light text-stone-600 dark:text-stone-200">
      Counter: {{ counter }}
    </div>

    <div class="flex justify-between py-2 sm:w-auto md:w-1/3">
      <BasicButton
        text="Decrementar"
        :icon="IconMinus"
        variant="primary"
        @click="decrement"
      />
      <BasicButton
        text="Incrementar"
        :icon="IconPlus"
        variant="primary"
        @click="increment"
      />
    </div>
  </div>
</template>

<style scoped></style>
