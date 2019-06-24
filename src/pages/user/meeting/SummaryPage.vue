<template>
  <q-page padding>
    <!-- content -->
    <div class="center-portion q-pa-lg" style="max-width: 700px;">
      <q-form ref="form" @submit="submitForm">
        <div class="q-gutter-xl column">
          <q-input
            label="MEETING NAME"
            :rules="[val=>!!val||'field is required']"
            v-model="meeting_name"
            stack-label
          />
          <q-input
            label="INITIATOR"
            :rules="[val=>!!val||'field is required']"
            v-model="initiator"
            stack-label
          />
          <q-input
            label="DATE"
            v-model="date"
            stack-label
            mask="date"
            :rules="[val=>!!val||'field is required']"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="date" today-btn @input="() => $refs.qDateProxy.hide()"/>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <!-- Project Name Drop Down -->
          <q-select
            v-model="selectedProject"
            :rules="[val=>!!val||'field is required']"
            stack-label
            :options="projects"
            label="PROJECT"
          />

          <q-btn
            label="SAVE"
            style="width:20%;"
            class="row flex-right q-px-xl bg-primary text-white"
            type="submit"
          />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Summary',
  // created () {
  //   this.$bus.$emit('Title', '< New Meeting')
  // },
  data () {
    return {
      meeting_name: '',
      initiator: '',
      date: '',
      selectedProject: null,
      projects: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5']
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
