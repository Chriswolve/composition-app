<script setup lang="ts">
  import type { IRouterLinkRaw } from '../types/IRouterLinkRaw'
  import IconChevronDown from './icons/IconChevronDown.vue'
  import {
    navClass,
    wrapperClass,
    webContainerClass,
    logoClass,
    webNavigationClass,
    webNavItemClass,
    webNavGroupClass,
    webNavGroupItemClass,
    webNavGroupItemWrapperClass,
    webNavGroupChildClass,
    activeClass,
    activeAltClass,
  } from '@shared/styles/navbar.styles'
  interface Props {
    navigation: Array<IRouterLinkRaw>
    logo: string
  }

  defineProps<Props>()
</script>
<template>
  <nav :class="navClass">
    <div :class="wrapperClass">
      <div :class="webContainerClass">
        <!-- Logo -->
        <div :class="logoClass">
          <a href="/">
            <img
              :src="$props.logo"
              alt="Vue logo"
              width="40"
              height="40"
            />
          </a>
        </div>
        <!-- Main Navigation -->
        <div :class="webNavigationClass">
          <template
            v-for="(link, index) in $props.navigation"
            :key="index"
          >
            <RouterLink
              v-if="!link.children"
              :class="webNavItemClass"
              :to="link.path"
              :active-class="activeClass"
            >
              {{ link.title }}
            </RouterLink>

            <div
              v-else
              :class="webNavGroupClass"
            >
              <!-- Dropdown Trigger -->
              <RouterLink
                :class="webNavGroupItemClass"
                :active-class="activeClass"
                :to="link.path"
              >
                {{ link.title }}
                <IconChevronDown />
              </RouterLink>
              <!-- Dropdown Menu -->
              <div :class="webNavGroupItemWrapperClass">
                <RouterLink
                  v-for="(child, index) in link.children"
                  :key="index"
                  :to="child.path"
                  :class="webNavGroupChildClass(index, link.children.length)"
                  :active-class="activeAltClass"
                >
                  {{ child.title }}
                </RouterLink>
              </div>
            </div>
          </template>
        </div>
        <!-- Mobile Menu Toggle -->
        <div class="md:hidden">
          <button
            id="mobile-menu-btn"
            class="hover:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
      id="mobile-menu"
      class="hidden md:hidden"
    >
      <a
        href="/"
        class="block px-4 py-2 hover:bg-gray-700"
      >
        Home
      </a>
      <a
        href="/about"
        class="block px-4 py-2 hover:bg-gray-700"
      >
        About
      </a>
      <div class="relative">
        <button
          class="flex w-full items-center px-4 py-2 text-left hover:bg-gray-700"
          onclick="toggleSubMenu()"
        >
          Services
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          id="mobile-submenu"
          class="hidden"
        >
          <a
            href="/service1"
            class="block px-4 py-2 hover:bg-gray-600"
          >
            Service 1
          </a>
          <a
            href="/service2"
            class="block px-4 py-2 hover:bg-gray-600"
          >
            Service 2
          </a>
          <a
            href="/service3"
            class="block px-4 py-2 hover:bg-gray-600"
          >
            Service 3
          </a>
        </div>
      </div>
      <a
        href="/contact"
        class="block px-4 py-2 hover:bg-gray-700"
      >
        Contact
      </a>
    </div>
  </nav>
</template>
