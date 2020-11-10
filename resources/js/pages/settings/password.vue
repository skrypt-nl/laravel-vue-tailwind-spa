<template>
  <div class="w-full flex">
    <card class="w-160 mx-auto">
      <div class="mx-auto py-4 lg:py-8 px-0 lg:px-12">
        <form @submit.prevent="update" @keydown="form.onKeydown($event)">
          <notification ref="success">
            {{ $t('password_updated') }}
          </notification>

          <!-- Password -->
          <div class="mb-6">
            <label class="font-bold text-gray-700 select-none" for="password">Password</label>
            <input id="password" v-model="form.password" :class="{ 'invalid': form.errors.has('password') }"
                   class="form-input block w-full text-gray-800 mt-2" name="password" type="password" placeholder="Min. 6 characters"
            >
            <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="password" />
          </div>

          <!-- Password Confirmation -->
          <div class="mb-8">
            <label class="font-bold text-gray-700 select-none" for="password_confirmation">Confirm Password</label>
            <input id="password_confirmation" v-model="form.password_confirmation" :class="{ 'invalid': form.errors.has('password_confirmation') }"
                   class="form-input block w-full text-gray-800 mt-2" name="password_confirmation" type="password"
            >
            <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="password_confirmation" />
          </div>

          <!-- Submit Button -->
          <div>
            <div>
              <v-button :loading="form.busy" type="success">
                {{ $t('update') }}
              </v-button>
            </div>
          </div>
        </form>
      </div>
    </card>
  </div>
</template>

<script>
import Form from 'vform'
import Notification from '../../components/Notification'

export default {
  components: { Notification },
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async update () {
      await this.form.patch('/api/settings/password')

      this.form.reset()
      this.$refs.success.show()
    }
  }
}
</script>
