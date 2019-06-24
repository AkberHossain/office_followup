<template>
  <q-page padding>
    <!-- content -->
    <div class="center-portion q-pa-lg">
      <q-form ref="form"  @submit="submitForm">
        <div class="q-gutter-xl" style="max-width: 800px">
          <q-input
            label="TASK TITLE"
            v-model="task_title"
            stack-label
            :rules="[val=>!!val||'field is required']"
            size="600px"
          />
          <q-input
            label="ASSIGNEE"
            v-model="assignee"
            stack-label
            :rules="[val=>!!val||'field is required']"
            size="600px"
          />
          <q-input
            label="DUE"
            stack-label
            v-model="date"
            :rules="[val=>!!val||'field is required']"
            mask="date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" today-btn @input="() => $refs.qDateProxy.hide()"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <div class="row float-right q-gutter-md">
            <q-btn label="CANCEL" to="/user/meeting" class="q-px-xl bg-yellow text-black"/>
            <q-btn label="ADD" class="q-px-xl bg-primary text-white" type="submit"/>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      task_title: '',
      assignee: '',
      date: ''
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
