<template>
  <div class="w-full flex">
    <card class="w-160 mx-auto">
      <div class="mx-auto py-4 lg:py-8 px-0 lg:px-12">
        <form @submit.prevent="update" @keydown="form.onKeydown($event)">
          <notification ref="success">
            {{ $t('info_updated') }}
          </notification>

          <!-- Name -->
          <div class="mb-6">
            <label class="font-bold text-gray-700 select-none" for="name">Name</label>
            <input id="name" v-model="form.name" :class="{ 'invalid': form.errors.has('name') }"
                   class="form-input block w-full text-gray-800 mt-2" name="name" type="text"
            >
            <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="name" />
          </div>

          <!-- Email -->
          <div class="mb-8">
            <label class="font-bold text-gray-700 select-none" for="email">Email</label>
            <input id="email" v-model="form.email" :class="{ 'invalid': form.errors.has('email') }"
                   class="form-input block w-full text-gray-800 mt-2" name="email" type="email"
            >
            <has-error class="text-sm text-red-500 font-semibold mt-2" :form="form" field="email" />
          </div>

          <!-- Submit Button -->
          <div>
            <div>
              <v-button :loading="form.busy">
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
import { mapGetters } from 'vuex'
import Notification from '../../components/Notification'

export default {
  components: { Notification },
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: ''
    })
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      const { data } = await this.form.patch('/api/settings/profile')

      this.$refs.success.show()
      await this.$store.dispatch('auth/updateUser', { user: data })
    }
  }
}
</script>
