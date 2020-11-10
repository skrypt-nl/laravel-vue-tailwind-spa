<template>
  <div v-if="active" class="w-full flex p-4 bg-green-100 text-green-600 font-semibold text-sm rounded mb-6">
    <div class="bg-green-600 h-4 w-4 rounded-full text-2xs flex my-auto">
      <fa :icon="['fas', 'check']" class="text-white m-auto" />
    </div>
    <h2 class="px-3">
      <slot />
    </h2>
    <fa :icon="['fas', 'times']" class="text-green-600 opacity-50 hover:opacity-100 transition-all ease-in-out duration-100 my-auto ml-auto cursor-pointer"
        @click="dismiss()"
    />
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data: () => ({
    active: false
  }),
  methods: {
    show () {
      this.active = true
    },
    dismiss () {
      this.active = false
    }
  }
}
</script>
