<template>
  <button
    :type="nativeType"
    :disabled="loading"
    class="bg-teal-500 text-white font-bold py-2 px-4 rounded w-full transition-all duration-100 ease-in-out"
    :class="!loading ? 'hover:bg-teal-700' : 'opacity-75 cursor-default' "
  >
    <slot v-if="!loading" />
    <fa v-if="loading" :icon="['fas', 'circle-notch']" class="fa-spin" />
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    type: {
      type: String,
      default: 'primary'
    },

    nativeType: {
      type: String,
      default: 'submit'
    },

    loading: {
      type: Boolean,
      default: false
    },

    block: {
      type: Boolean,
      default: false
    },

    large: {
      type: Boolean,
      default: false
    }
  }
}
</script>
