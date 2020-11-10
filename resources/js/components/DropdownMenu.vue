<template>
  <div v-click-outside="hide" class="relative inline-block text-left">
    <div>
      <span class="rounded-md shadow-sm">
        <button id="options-menu" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:shadow-outline-none active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150" aria-haspopup="true" aria-expanded="true" @click="toggle">
          <slot />
          <!-- Heroicon name: chevron-down -->
          <fa :icon="['fas', 'chevron-down']" class="m-auto text-xs -ml-1 transition-all duration-300 ease-in-out" :class="isOpen ? 'flip-y' : ''" />
        </button>
      </span>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="isOpen" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
        <div class="rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" @click="hide">
          <slot name="items" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'DropdownMenu',
  directives: {
    ClickOutside
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    },
    hide: function () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
  .flip-y {
    transform: rotateX(180deg);
    transform-style: preserve-3d;
  }
</style>
