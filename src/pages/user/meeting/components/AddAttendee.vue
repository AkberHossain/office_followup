<template>
  <q-card class="q-pa-lg">
    <q-card-section>
      <div class="text-h6 text-center">Add new Attendee</div>
    </q-card-section>

    <q-card-section>
      <div class="center-portion q-pa-lg" style="max-width: 700px">
        <q-form ref="form" @submit="submitForm">
          <div class="q-gutter-xl">
            <q-input
              v-model="attendee"
              :rules="[val=>!!val||'field is required']"
              label="ATTENDEE"
              stack-label
              size="600px"
            />
            <q-input
              v-model="email"
              :rules="[val=>!!val||'field is required', val=>validateEmail||'Wrong email format.' ]"
              label="EMAIL"
              stack-label
              size="600px"
            />
            <div class="row float-right q-gutter-md">
              <q-btn label="CANCEL" v-close-popup class="q-px-xl bg-yellow text-black"/>
              <q-btn label="ADD" class="q-px-xl bg-primary text-white" type="submit"/>
            </div>
          </div>
        </q-form>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'AddAttendee',
  data () {
    return {
      attendee: '',
      email: ''
    }
  },
  computed: {
    validateEmail () {
      var re = /\S+@\S+\.\S+/
      return re.test(this.email)
    },
    newAttendee () {
      // eslint-disable-next-line no-sequences
      return this.attendee, this.email
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate().then(success => {
        if (success) {
          this.$q.notify('Form Submitted')
          this.$emit('formSubmit', this.newAttendee)
        } else {
        }
      })
    }
  }
}
</script>

<style>
</style>
