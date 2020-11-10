<template>
  <div class="flex w-screen h-screen">
    <div class="m-auto flex flex-col max-w-screen">
      <div class="p-8 mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-1 tracking-tight">
          Create a new account
        </h1>
        <h2 class="text-lg text-gray-800 font-medium">
          Already have an account?
          <router-link :to="{name: 'login'}"
                       class="text-teal-500 hover:text-teal-600 transition-all duration-100 ease-in-out"
          >
            Sign in
          </router-link>
        </h2>
      </div>
      <div class="px-3 w-screen sm:w-128 max-w-screen">
        <div class="bg-white rounded shadow py-10 lg:py-12 px-6 sm:px-8 md:px-10 lg:px-12">
          <form @submit.prevent="register" @keydown="form.onKeydown($event)">
            <div class="mb-6">
              <label class="font-bold text-gray-700 select-none" for="name">Name</label>
              <input id="name" v-model="form.name" :class="{ 'invalid': form.errors.has('name') }"
                     class="form-input block w-full text-gray-800 mt-2" name="name"
              >
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="name" />
            </div>
            <div class="mb-6">
              <label class="font-bold text-gray-700 select-none" for="email">Email address</label>
              <input id="email" v-model="form.email" :class="{ 'invalid': form.errors.has('email') }"
                     class="form-input block w-full text-gray-800 mt-2" name="email" type="email"
              >
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="email" />
            </div>
            <div class="mb-8">
              <label class="font-bold text-gray-700 select-none" for="password">Password</label>
              <input id="password" v-model="form.password" :class="{ 'invalid': form.errors.has('password') }"
                     class="form-input block w-full text-gray-800 mt-2" name="password" type="password" placeholder="Min. 6 characters"
              >
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="password" />
            </div>
            <div class="flex mb-8">
              <div class="cursor-pointer mr-4">
                <label class="flex items-center cursor-pointer">
                  <input v-model="form.terms" type="checkbox" class="form-checkbox text-teal-500 cursor-pointer">
                  <span class="ml-2 font-medium text-gray-700 select-none cursor-pointer">
                    I agree to the <router-link class="text-teal-500 hover:text-teal-600" :to="{name: 'terms'}">Terms & Conditions</router-link>
                  </span>
                </label>
                <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="terms" />
              </div>
            </div>
            <div>
              <v-button :loading="form.busy">
                {{ $t('register') }}
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
    return { title: this.$t('register') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      password: '',
      terms: false
    }),
    mustVerifyEmail: false
  }),

  methods: {
    async register () {
      // Register the user.
      const { data } = await this.form.post('/api/register')

      // Must verify email fist.
      if (data.status) {
        this.mustVerifyEmail = true
      } else {
        // Log in the user.
        const { data: { token } } = await this.form.post('/api/login')

        // Save the token.
        this.$store.dispatch('auth/saveToken', { token })

        // Update the user.
        await this.$store.dispatch('auth/updateUser', { user: data })

        // Redirect home.
        this.$router.push({ name: 'dashboard.home' })
      }
    }
  }
}
</script>
