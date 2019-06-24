<template>
 <q-page>
    <div style="max-width: 750px ;" >
      <q-toolbar class="bg-grey-4 text-black">
        <q-toolbar-title>This Week</q-toolbar-title>
      </q-toolbar>

      <q-list bordered separator>
        <q-item   clickable v-ripple class="q-pa-lg">

          <q-item-section>
            <q-item-label class="text-weight-bold">
              Review Meeting
            </q-item-label>
            <q-item-label caption lines="1">
              Monday at 4:00 PM – 5:00 PM
            </q-item-label>
          </q-item-section>

        </q-item>
        <q-item   clickable v-ripple class="q-pa-lg">

          <q-item-section>
            <q-item-label class="text-weight-bold">
              Sabeena Faizun
            </q-item-label>
            <q-item-label caption lines="1">
              Tuesday at 4:00 PM – 5:00 PM
            </q-item-label>
          </q-item-section>

        </q-item>
      </q-list>

      <q-toolbar class="bg-grey-4 text-black">
        <q-toolbar-title>Next Week</q-toolbar-title>
      </q-toolbar>

      <q-list bordered separator>
        <q-item   clickable v-ripple class="q-pa-lg">

          <q-item-section>
            <q-item-label class="text-weight-bold">
              Review Meeting
            </q-item-label>
            <q-item-label caption lines="1">
              Monday at 4:00 PM – 5:00 PM
            </q-item-label>
          </q-item-section>

        </q-item>
        <q-item   clickable v-ripple class="q-pa-lg">

          <q-item-section>
            <q-item-label class="text-weight-bold">
              Sabeena Faizun
            </q-item-label>
            <q-item-label caption lines="1">
              Tuesday at 4:00 PM – 5:00 PM
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-toolbar class="bg-grey-4 text-black">
        <q-toolbar-title>Beyond This Week</q-toolbar-title>
      </q-toolbar>

      <q-list bordered separator>
        <q-item   clickable v-ripple class="q-pa-lg">

          <q-item-section>
            <q-item-label class="text-weight-bold">
              Review Meeting
            </q-item-label>
            <q-item-label caption lines="1">
              Monday at 4:00 PM – 5:00 PM
            </q-item-label>
          </q-item-section>

        </q-item>
      </q-list>

    </div>
    <q-page-sticky position="bottom" :offset="[48, 28]">
          <q-btn to="/user/meeting/summary" fab icon="add" color="primary" />
        </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'DashBoard'
}
</script>

<style>
</style>
