<template>
  <div>
    <q-layout view="lHh Lpr lff">

      <!-- Header -->
      <q-header elevated class="inner-header bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>{{ headerTitle }}</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <!-- Left Drawer -->
      <q-drawer class="left-drawer" :breakpoint="767" v-model="drawer" :width="350" >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">

          <!--List Button -->
          <q-list padding>

            <!-- Dashboard -->
            <q-item clickable v-ripple to="/user" exact>
              <q-item-section avatar>
                <q-icon name="home" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <!-- Meetings -->
            <q-item clickable v-ripple to="/user/meeting/" exact>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Meetings
              </q-item-section>
            </q-item>

            <!-- Meeting Invites -->
            <q-item clickable v-ripple to="/user/invite/" exact>
              <q-item-section avatar>
                <q-icon name="notifications" />
              </q-item-section>

              <q-item-section>
                Meeting Invites
              </q-item-section>
            </q-item>

            <!-- Logout -->
            <q-item to="/" clickable v-ripple exact>
              <q-item-section avatar>
                <q-icon name="logout" />
              </q-item-section>

              <q-item-section>
                Logout
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <!-- Left Top Image and Name -->
        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="76px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">John Doe</div>
            <div>john@gmail.com</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
       <router-view></router-view>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      headerTitle: ''
    }
  },
  methods: {
    getTitle: function (Title) {
      this.headerTitle = Title
    }
  }
  // created () {
  //   this.$bus.$on('Title', this.getTitle)
  // }
}
</script>

<style>
.center-portion{
  font-size:18px;
}
.q-field__label{
  font-size:22px;
  padding-bottom:50px;
}
.bottom-text{
    font-size : 18px !important;
    padding-top:65px;
  }
@media screen and (max-width: 767px) {
  .bottom-text,span{
    font-size : 14px !important;
  }
  .left-drawer{
    width: 200px !important;
  }
}
</style>
