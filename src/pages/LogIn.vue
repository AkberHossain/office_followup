<template>
  <q-page padding>
    <!-- content -->
    <q-header class="bg-white text-black">
      <div class="q-pa-xl q-ml-xl">
        <h3>LOGIN</h3>
      </div>
    </q-header>

    <div class="center-portion q-pa-lg row flex-center">
      <div class="q-gutter-xl" style="max-width: 600px">
        <q-input
          label="EMAIL"
          v-model="email"
          :rules="[ val=>!!val||'field is required']"
          stack-label
          size="600px"
        />
        <q-input
          label="PASSWORD"
          v-model="password"
          stack-label
          :type="visibility ? 'text' : 'password'"
          :rules="[ val=>!!val||'field is required']"
          size="600px"
        >
          <template v-slot:append>
            <q-btn round dense flat :icon="visibility?'visibility_off':'visibility'" @click="visibility = !visibility" />
          </template>
        </q-input>
        <q-btn
          class="float-right q-px-xl q-mt-md"
          to="/user"
          label="Login"
          type="submit"
          color="primary"
        ></q-btn>
        <p class="bottom-text text-grey-7 q-pt-xl">
          Don't have an account?
          <span class="text-h6 text-indigo-9">
            <router-link class="link" to="/register">REGISTER</router-link>
          </span>
        </p>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'LogIn',
  data () {
    return {
      email: '',
      password: '',
      visibility: false
    }
  }
}
</script>

<style>
.link{
  text-decoration: none;
}
</style>
