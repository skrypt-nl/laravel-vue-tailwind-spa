<template>
  <div class="w-full flex text-center">
    <div class="absolute top-0 right-0 p-6">
      <template v-if="authenticated">
        <router-link :to="{ name: 'dashboard.home' }" class="mx-4 transition-all duration-100 ease-in-out hover:text-teal-500">
          {{ $t('home') }}
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'login' }" class="mx-4 transition-all duration-100 ease-in-out hover:text-teal-500">
          {{ $t('login') }}
        </router-link>
        <router-link :to="{ name: 'register' }" class="mx-4 transition-all duration-100 ease-in-out hover:text-teal-500">
          {{ $t('register') }}
        </router-link>
      </template>
    </div>

    <div class="m-auto">
      <div class="text-6xl mb-4">
        {{ title }}
      </div>

      <div class="links transition-all duration-100 ease-in-out hover:text-teal-500">
        <a href="https://github.com/skrypt-nl/laravel-vue-tailwind-spa" target="_blank">github.com/skrypt-nl/laravel-vue-tailwind-spa</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>
