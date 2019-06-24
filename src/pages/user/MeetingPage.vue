<template>
  <q-page>
    <!-- content -->
    <div>

      <q-tabs
        align="left"
        class="text-grey-6 q-pt-md shadow-2"
        v-model="selectedTab"
      >
        <q-route-tab to="/user/meeting/" class="q-px-xl" name="agenda" label="AGENDA" />
        <q-route-tab to="/user/meeting/attendees" name="attendees" class="q-px-xl" label="ATTENDEES" />
        <q-route-tab to="/user/meeting/summary" name="summary" class="q-px-xl" label="SUMMARY" />
      </q-tabs>

    </div>

    <div>
      <router-view></router-view>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'MeetingPage',
  data () {
    return {
      selectedTab: 'agenda'
    }
  }
}
</script>

<style scoped>
.q-tab__label{
  font-size:22px;
}
.q-tab--active{
  color:black !important;
}
</style>
