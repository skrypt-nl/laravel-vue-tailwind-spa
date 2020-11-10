<template>
  <nav class="bg-white text-gray-800 flex py-4 px-8 justify-between border-b z-50">
    <div class="flex">
      <h1 class="my-auto text-3xl font-semibold tracking-tighter text-teal-600">
        <!-- LOGO HERE -->
      </h1>
    </div>

    <div class="flex my-auto">
      <div class="my-auto">
        <!-- Notifications -->
      </div>
      <div class="my-auto flex">
        <dropdown-menu class="my-auto">
          <div class="flex">
            <div class="my-auto bg-gray-200 mr-3 rounded-full border-2 border-gray-200 overflow-hidden select-none">
              <img :src="user.photo_url" class="select-none h-6" :alt="user.name">
            </div>
            <div class="my-auto mr-4">
              <p class="font-semibold leading-none tracking-wide">
                {{ user.name }}
              </p>
            </div>
          </div>

          <template v-slot:items>
            <div class="py-1">
              <router-link :to="{name: 'settings.profile'}"
                           class="font-semibold block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition-all duration-100 ease-in-out outline-none"
                           role="menuitem"
              >
                Settings
              </router-link>
            </div>
            <div class="border-t border-gray-100" />
            <div class="py-1">
              <span
                class="font-semibold cursor-pointer block px-4 py-2 text-sm leading-5 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition-all duration-100 ease-in-out outline-none"
                role="menuitem"
                @click="logout"
              >
                Logout
              </span>
            </div>
          </template>
        </dropdown-menu>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import DropdownMenu from './DropdownMenu'

export default {
  components: { DropdownMenu },
  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      await this.$router.push({ name: 'login' })
    }
  }
}
</script>
