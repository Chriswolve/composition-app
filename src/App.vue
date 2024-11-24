<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import SimpleWrapper from './shared/components/SimpleWrapper.vue'

  import Logo from '@/assets/vite.svg'

  import NavBar from './shared/components/NavBar.vue'

  import { layoutClasses, wrapperClasses } from './shared/styles/app.styles'

  import { appRoutes } from './shared/routes/app.routes'

  console.log(appRoutes)
</script>

<template>
  <div :class="layoutClasses">
    <NavBar
      :logo="Logo"
      :navigation="appRoutes"
    />

    <SimpleWrapper :class="wrapperClasses">
      <RouterView />
    </SimpleWrapper>
  </div>
</template>

<style scoped></style>
