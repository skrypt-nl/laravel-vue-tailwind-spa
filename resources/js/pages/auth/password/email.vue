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
          <form v-if="!status" @submit.prevent="send" @keydown="form.onKeydown($event)">
            <div class="mb-8">
              <label class="font-bold text-gray-700 select-none" for="email">Email address</label>
              <input id="email" v-model="form.email"
                     :class="{ 'invalid': form.errors.has('email') || form.errors.has('credentials') }"
                     class="form-input block w-full text-gray-800 mt-2" name="email" type="email"
              >
              <p v-if="!form.errors.has('email')" class="font-medium text-sm text-gray-500 mt-2 select-none">
                We'll send a password reset link to your inbox
              </p>
              <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="email" />
            </div>

            <div>
              <v-button :loading="form.busy">
                {{ $t('send_password_reset_link') }}
              </v-button>
            </div>
          </form>
          <div v-else class="text-center">
            <fa :icon="['far', 'envelope-open']" class="text-teal-500 opacity-50 text-7xl mb-4" />
            <h1 class="text-3xl font-bold text-gray-800 leading-loose">
              You've got mail
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
    status: null,
    form: new Form({
      email: ''
    })
  }),

  methods: {
    async send () {
      const { data } = await this.form.post('/api/password/email')

      this.status = data.status

      this.form.reset()
    }
  }
}
</script>
