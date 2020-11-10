<template>
  <div class="flex flex-col">
    <div class="bg-white -ml-8 -mt-8 -mr-8 mb-8 border-b px-6 flex">
      <div class="flex mx-auto">
        <router-link
          v-for="tab in tabs"
          :key="tab.route"
          :to="{ name: tab.route }"
          class="p-4 font-semibold mx-4 text-gray-500 hover:text-gray-800 transition-all ease-in-out duration-100 border-b-4 border-transparent"
          active-class="text-gray-800 border-teal-500"
        >
          <fa :icon="tab.icon" fixed-width />
          {{ tab.name }}
        </router-link>
      </div>
    </div>

    <div class="flex">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',

  computed: {
    tabs () {
      return [
        {
          icon: 'user',
          name: this.$t('profile'),
          route: 'settings.profile'
        },
        {
          icon: 'lock',
          name: this.$t('password'),
          route: 'settings.password'
        }
      ]
    }
  }
}
</script>

<style>
.settings-card .card-body {
  padding: 0;
}
</style>
