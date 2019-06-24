<template>
  <q-page padding>
    <!-- content -->
    <div class="center-portion q-pa-lg" style="max-width: 700px">
      <q-form ref="form" @submit="submitForm">
        <div class="q-gutter-xl" >
          <q-input v-model="attendee" :rules="[val=>!!val||'field is required']" label="ATTENDEE" stack-label size="600px" />
          <div class="row float-right q-gutter-md">
            <q-btn label="CANCEL" to="/user/meeting/addattendee" class=" q-px-xl bg-yellow text-black" />
            <q-btn label="ADD" class=" q-px-xl bg-primary text-white" type="submit" />
          </div>
        </div>
      </q-form>
     </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      attendee: ''
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate().then(success => {
        if (success) {
          console.log('form submitted')
          this.$q.notify('Form Submitted')
        } else {
        }
      })
    }
  }
}
</script>

<style>
</style>
