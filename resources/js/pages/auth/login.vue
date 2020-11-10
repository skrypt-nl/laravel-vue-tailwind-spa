<template>
  <div class="flex w-screen h-screen">
    <div class="m-auto flex flex-col max-w-screen">
      <div class="p-8 mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-1 tracking-tight">
          Sign in to your account
        </h1>
        <h2 class="text-lg text-gray-800 font-medium">
          New here?
          <router-link :to="{name: 'register'}"
                       class="text-teal-500 hover:text-teal-600 transition-all duration-100 ease-in-out"
          >
            Create an account
          </router-link>
        </h2>
      </div>
      <div class="px-3 w-screen sm:w-128 max-w-screen">
        <div class="bg-white rounded shadow py-10 lg:py-12 px-6 sm:px-8 md:px-10 lg:px-12">
          <form @submit.prevent="login" @keydown="form.onKeydown($event)">
            <div class="mb-6">
              <label class="font-bold text-gray-700 select-none" for="email">Email address</label>
              <input id="email" v-model="form.email" :class="{ 'invalid': form.errors.has('email') || form.errors.has('credentials') }"
                     class="form-input block w-full text-gray-800 mt-2" name="email" type="email"
              >
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="email" />
            </div>
            <div class="mb-6">
              <label class="font-bold text-gray-700 select-none" for="password">Password</label>
              <input id="password" v-model="form.password" :class="{ 'invalid': form.errors.has('password') || form.errors.has('credentials') }"
                     class="form-input block w-full text-gray-800 mt-2" name="password" type="password"
              >
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="password" />
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="credentials" />
            </div>
            <div class="flex mb-8">
              <div class="cursor-pointer mr-4">
                <label class="flex items-center cursor-pointer">
                  <input v-model="remember" type="checkbox" class="form-checkbox text-teal-500 cursor-pointe">
                  <span class="ml-2 font-medium text-gray-700 select-none cursor-pointer">Remember me</span>
                </label>
              </div>
              <div class="ml-auto text-right">
                <router-link :to="{name: 'password.request'}"
                             class="text-teal-500 font-medium hover:text-teal-600 transition-all duration-100 ease-in-out text-right"
                >
                  Forgot your password?
                </router-link>
              </div>
            </div>
            <div>
              <v-button :loading="form.busy">
                {{ $t('login') }}
              </v-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'

export default {
  middleware: 'guest',
  layout: 'basic',

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'dashboard.home' })
    }
  }
}
</script>
