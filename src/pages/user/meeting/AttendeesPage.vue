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
            <q-btn to="/user/meeting/addattendee" fab icon="add" color="primary" />
          </q-page-sticky>
      </q-list>

      <div class="flex-center" style="padding:calc(100% - 550px) 0 0 calc(100% - 650px); ">
        <ul>
          <li class="q-pb-sm"><q-icon name="done" color="grey-7" size="20px"/> Means user did not confirm </li>
          <li class="q-pb-sm"> <q-icon name="done" color="green" size="20px"/> Confirmed user  </li>
          <li class="q-pb-sm"><q-icon name="delete" color="black" size="20px"/> Delete this attendees </li>
        </ul>
      </div>

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
