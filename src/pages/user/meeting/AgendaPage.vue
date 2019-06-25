<template>
  <q-page padding>
    <!-- Agenda list -->
    <div style="max-width:700px;">
      <q-list separator>
        <!-- Agenda AddTask Button  -->
        <q-item clickable @click="editAgenda_popup = true" class="q-pa-lg">
          <q-item-section>
            <q-item-label class="text-h6 q-pb-md">Review UI/UX</q-item-label>
            <q-item-label>
              Team review completed and everyone understands
              what is expected. We have a few action items for this
              to complete on timely manner.
            </q-item-label>
            <q-btn
              label="+ Add Task"
              style="width:120px;"
              class="q-mt-lg bg-green text-white"
              @click.stop="addTask_popup = true"
            />
          </q-item-section>
        </q-item>
        <!-- TODO -->
        <q-item class="q-pa-lg">
          <q-list separator padding>
            <q-item-label header>TODO</q-item-label>

            <!-- TODO 1-->
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check"/>
              </q-item-section>

              <q-item-section>
                <q-item-label>Submit final UX for team to start working on.</q-item-label>
                <q-item-label caption>
                  Hassan Khan by
                  <small>JUNE 23</small>
                </q-item-label>
              </q-item-section>
            </q-item>

            <!-- TODO 2-->
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check"/>
              </q-item-section>

              <q-item-section>
                <q-item-label>Approve UX</q-item-label>
                <q-item-label caption>
                  Sabeena by
                  <small>JUNE 23</small>
                </q-item-label>
              </q-item-section>
            </q-item>

            <!-- TODO 3-->
            <q-item tag="label" v-ripple>
              <q-item-section side top>
                <q-checkbox v-model="check"/>
              </q-item-section>

              <q-item-section>
                <q-item-label>Logo submitted</q-item-label>
                <q-item-label caption>
                  Dan by
                  <small>JUNE 23</small>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-item>
        <!-- Agenda 2 -->
        <q-item clickable @click="editAgenda_popup = true" class="q-pa-lg">
          <q-item-section>
            <q-item-label class="text-h6 q-pb-md">
              Decide on OAuth Social Login. We have changed this
              feature back and forth.
            </q-item-label>
            <q-item-label>
              We are deciding to have OAuth to use Google and
              Facebook for now.
            </q-item-label>
            <q-btn
              label="+ Add Task"
              style="width:120px;"
              class="q-mt-lg bg-green text-white"
              @click.stop="addTask_popup = true"
            />
          </q-item-section>
        </q-item>
        <!-- Agenda 3 -->
        <q-item clickable @click="editAgenda_popup = true" class="q-pa-lg">
          <q-item-section>
            <q-item-label class="text-h6 q-pb-md">Release 2.1 progress and TODO</q-item-label>
            <q-btn
              label="+ Add Task"
              style="width:120px;"
              class="q-mt-lg bg-green text-white"
              @click.stop="addTask_popup = true"
            />
          </q-item-section>
        </q-item>
        <!-- Agenda 4 -->
        <q-item clickable @click="editAgenda_popup = true" class="q-pa-lg">
          <q-item-section>
            <q-item-label class="text-h6 q-pb-md">Discuss Workload and Allocation</q-item-label>
            <q-btn
              label="+ Add Task"
              style="width:120px;"
              class="q-mt-lg bg-green text-white"
              @click.stop="addTask_popup = true"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>

    <q-page-sticky position="bottom" :offset="[48, 28]">
      <q-btn @click="addAgenda_popup = true" class="shadow-2" fab icon="add" color="primary"/>
    </q-page-sticky>

    <!-- Dialog will be converted to components -->

    <q-dialog v-model="addTask_popup">
      <AddTask @formSubmit=" newTask => addTask_popup = false "/>
    </q-dialog>

    <q-dialog v-model="addAgenda_popup">
      <AddAgenda @formSubmit=" newAgenda => addAgenda_popup = false "/>
    </q-dialog>

    <q-dialog v-model="editAgenda_popup">
      <EditAgenda @formSubmit=" updatedAgenda => editAgenda_popup = false "/>
    </q-dialog>
  </q-page>
</template>

<script>
import AddTask from './components/AddTask.vue'
import AddAgenda from './components/AddAgenda.vue'
import EditAgenda from './components/EditAgenda.vue'

export default {
  name: 'Agenda',
  components: { AddTask, AddAgenda, EditAgenda },
  data () {
    return {
      check: true,
      addTask_popup: false,
      addAgenda_popup: false,
      editAgenda_popup: false
    }
  }
}
</script>

<style scoped>
.inner-header {
  display: none;
}
</style>
