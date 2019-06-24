<template>
  <q-page padding>
    <!-- content -->
    <div class="center-portion q-pa-lg" style="max-width: 700px">
      <q-form ref="form" @submit="submitForm">
        <div class="q-gutter-xl" >
          <q-input
            label="AGENDA ITEM"
            v-model="agenda_item"
            :rules="[val=>!!val||'field is required']"
            stack-label
            size="600px"
          />
          <q-input
            label="AGENDA OUTCOME"
            v-model="agenda_outcome"
            :rules="[val=>!!val||'field is required']"
            autogrow
            stack-label
            size="600px"
          />
          <div class="row float-right q-gutter-md">
            <q-btn label="DELETE" class="col q-px-xl text-white bg-red"/>
            <q-btn label="CANCEL" to="/user/meeting" class="col q-px-xl text-black bg-yellow"/>
            <q-btn label="SAVE" class="col q-px-xl text-white bg-primary" type="submit"/>
          </div>
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AddAgenda',
  data () {
    return {
      agenda_item: '',
      agenda_outcome: ''
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
