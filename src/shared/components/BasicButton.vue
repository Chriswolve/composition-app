<template>
  <button
    :type="props.type"
    @click="handleClick"
    :class="buttonClasses"
    :disabled="props.disabled"
  >
    <span
      v-if="props.icon"
      class="flex items-center"
    >
      <component
        :is="props.icon"
        class="mr-2 h-5 w-5"
      />
    </span>
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import type { Component } from 'vue'

  // Definición de las propiedades (props) con tipado
  interface ButtonProps {
    text: string
    icon?: Component
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'danger' | 'success'
    disabled?: boolean
  }

  // Definición de las propiedades con valores por defecto usando `withDefaults` directamente con `defineProps`
  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'button',
    variant: 'primary',
    disabled: false,
  })

  // Definición de los eventos emitidos
  const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
  }>()

  // Computed para las clases del botón
  const buttonClasses = computed(() => {
    const baseClasses = `
    inline-flex items-center rounded-md border border-transparent
    px-3 py-2 text-sm font-normal
    `

    // Utilizar NonNullable para eliminar 'undefined' del tipo 'variant'
    const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
      primary: 'text-gray-200 bg-zinc-800 hover:bg-zinc-700',
      secondary: 'text-gray-700 bg-gray-200 hover:bg-gray-300',
      danger: 'text-white bg-red-600 hover:bg-red-700',
      success: 'text-white bg-green-600 hover:bg-green-700',
    }

    const disabledClasses = props.disabled
      ? 'opacity-50 cursor-not-allowed'
      : ''

    return `${baseClasses} ${variants[props.variant!]} ${disabledClasses}`
  })

  // Manejo del evento click
  const handleClick = (event: MouseEvent) => {
    if (!props.disabled) {
      emit('click', event)
    }
  }
</script>
