<template>
  <div>
    <!-- Renderiza el contenido por defecto si no hay error -->
    <slot v-if="!hasError"></slot>

    <!-- Renderiza el slot 'error' con el objeto de error si hay un error -->
    <div
      v-else
      class="error"
    >
      <slot
        name="error"
        :error="error"
      ></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onErrorCaptured } from 'vue'

  // Estado reactivo para rastrear errores
  const hasError = ref(false)
  const error = ref<Error | null>(null)

  // Hook para capturar errores de componentes hijos
  onErrorCaptured((err: Error) => {
    hasError.value = true
    error.value = err
    // Prevent the error from propagating further
    return false
  })
</script>

<style scoped>
  .error {
    padding: 20px;
    background-color: #ffe6e6;
    color: #cc0000;
    border: 1px solid #cc0000;
    border-radius: 5px;
    text-align: center;
  }
</style>
