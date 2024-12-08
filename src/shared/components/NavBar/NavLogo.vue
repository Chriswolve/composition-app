<script setup lang="ts">
  import { logoClass } from '@shared/styles/navbar.styles'

  interface Props {
    logo: string
  }
  defineProps<Props>()
</script>

<template>
  <div :class="logoClass">
    <RouterLink to="/">
      <img
        :src="logo"
        alt="Vue logo"
        width="40"
        height="40"
      />
    </RouterLink>
  </div>
</template>

<style scoped></style>
