<template>
  <q-page padding>
    <!-- content -->
    <div style="max-width: 750px">

      <q-list padding separator>
        <q-item   clickable v-ripple class="q-pa-lg">
          <q-item-section>
            <q-item-label>Reza Khan</q-item-label>
            <q-item-label caption lines="1">reza@itconquest.com</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="done"  color="green" />
          </q-item-section>
          <q-item-section side>
            <q-icon name="delete" color="black" />
          </q-item-section>
        </q-item>
        <q-item   clickable v-ripple class="q-pa-lg">
          <q-item-section>
            <q-item-label>Reza Khan</q-item-label>
            <q-item-label caption lines="1">reza@itconquest.com</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="done"  color="green" />
          </q-item-section>
          <q-item-section side>
            <q-icon name="delete" color="black" />
          </q-item-section>
        </q-item>
        <q-item   clickable v-ripple class="q-pa-lg">
          <q-item-section>
            <q-item-label>Reza Khan</q-item-label>
            <q-item-label caption lines="1">reza@itconquest.com</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="done"  color="green" />
          </q-item-section>
          <q-item-section side>
            <q-icon name="delete" color="black" />
          </q-item-section>
        </q-item>
        <q-item   clickable v-ripple class="q-pa-lg">
          <q-item-section>
            <q-item-label>Reza Khan</q-item-label>
            <q-item-label caption lines="1">reza@itconquest.com</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-icon name="done"  color="grey-7" />
          </q-item-section>
          <q-item-section side>
            <q-icon name="delete" color="black" />
          </q-item-section>
        </q-item>
        <q-page-sticky class="float-right" position="absolute-bottom" :offset="[18, 28]">
            <q-btn to="/user/meetings/id/addattendee" fab icon="add" color="primary" />
          </q-page-sticky>
      </q-list>
    </div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>

<style>
</style>
