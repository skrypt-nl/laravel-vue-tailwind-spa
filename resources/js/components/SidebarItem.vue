<template>
  <div class="rounded px-6 py-3 my-2 cursor-pointer transition-all duration-100 ease-in-out group"
       :class="isCurrentRoute ? 'bg-teal-500' : 'bg-transparent hover:bg-gray-100'"
       @click="go"
  >
    <span class="font-semibold transition-all duration-100 ease-in-out" :class="isCurrentRoute ? 'text-white' : 'text-gray-600 group-hover:text-gray-800'">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    route: {
      default: 'dashboard',
      type: String,
      required: true
    }
  },
  computed: {
    isCurrentRoute: function () {
      return this.route === this.$route.name
    }
  },
  methods: {
    go: function () {
      if (!this.isCurrentRoute) {
        this.$router.push({ name: this.route })
      }
    }
  }
}
</script>

<style scoped>

</style>
