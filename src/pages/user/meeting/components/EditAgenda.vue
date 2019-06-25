<template>
<q-card class="q-pa-lg">
    <q-card-section>
      <div class="text-h6 text-center">Edit Agenda</div>
    </q-card-section>

    <q-card-section>
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
                <q-btn label="DELETE" v-close-popup class="col q-px-xl text-white bg-red"/>
                <q-btn label="CANCEL" v-close-popup class="col q-px-xl text-black bg-yellow"/>
                <q-btn label="SAVE" class="col q-px-xl text-white bg-primary" type="submit"/>
            </div>
            </div>
        </q-form>
        </div>
    </q-card-section>
  </q-card>
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
  computed: {
    updatedAgenda () {
      // eslint-disable-next-line no-sequences
      return this.agenda_item, this.agenda_outcome
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate().then(success => {
        if (success) {
          this.$q.notify('Form Submitted')
          this.$emit('formSubmit', this.updatedAgenda)
        } else {
        }
      })
    }
  }
}
</script>

<style>

</style>
