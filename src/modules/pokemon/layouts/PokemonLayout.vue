<script setup lang="ts">
  //import ErrorBoundary from '@shared/components/ErrorBoundary.vue'
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center">
    <!-- <ErrorBoundary>
      <template #default>
        <RouterView v-slot="{ Component }">
          <Suspense timeout="0">
            <component :is="Component" />
            <template #fallback>
              <div>Loading...</div>
            </template>
          </Suspense>
        </RouterView>
      </template>
      <template #error="{ error }">
        <div class="error">Error: {{ error?.message }}</div>
      </template>
    </ErrorBoundary> -->

    <RouterView></RouterView>
  </div>
</template>

<style scoped></style>
