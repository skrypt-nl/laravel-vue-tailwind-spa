<template>
  <div class="flex w-screen h-screen">
    <div class="m-auto flex flex-col max-w-screen">
      <div class="p-8 mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-1 tracking-tight">
          Reset your password
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
          <form v-if="!status" @submit.prevent="reset" @keydown="form.onKeydown($event)">
            <div class="mb-6">
              <label class="font-bold text-gray-700 select-none" for="email">Email address</label>
              <input id="email" v-model="form.email"
                     :class="{ 'invalid': form.errors.has('email') }"
                     class="form-input block w-full text-gray-800 mt-2" name="email" type="email"
              >
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="email" />
            </div>

            <div class="mb-8">
              <label class="font-bold text-gray-700 select-none" for="password">New password</label>
              <input id="password" v-model="form.password" :class="{ 'invalid': form.errors.has('password') }"
                     class="form-input block w-full text-gray-800 mt-2" name="password" type="password" placeholder="Min. 6 characters"
              >
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="password" />
            </div>

            <div>
              <v-button :loading="form.busy">
                {{ $t('reset_password') }}
              </v-button>
            </div>
          </form>
          <div v-else class="text-center">
            <fa :icon="['far', 'check-circle']" class="text-teal-500 opacity-50 text-7xl mb-4" />
            <h1 class="text-3xl font-bold text-gray-800 leading-loose">
              Reset successful
            </h1>
            <h2 class="text-base font-medium text-gray-500">
              {{ status }}
            </h2>
          </div>
        </div>
        <div class="mt-4">
          <router-link :to="{name: 'login'}"
                       class="text-teal-500 hover:text-teal-600 transition-all duration-100 ease-in-out text-gray-800 font-medium"
          >
            <fa :icon="['fas', 'chevron-left']" class="mr-1 text-sm" />
            Back to login
          </router-link>
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
    return { title: this.$t('reset_password') }
  },

  data: () => ({
    status: '',
    form: new Form({
      token: '',
      email: '',
      password: '',
      password_confirmation: ''
    })
  }),

  created () {
    this.form.email = this.$route.query.email
    this.form.token = this.$route.params.token
  },

  methods: {
    async reset () {
      const { data } = await this.form.post('/api/password/reset')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>
