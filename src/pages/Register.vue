<template>
  <q-page padding>
    <!-- content -->
    <q-header class="bg-white text-black" >
      <div class="q-pa-xl q-ml-xl">
        <h3 class="header">REGISTER</h3>
      </div>
    </q-header>

    <div class="center-portion q-pa-lg row flex-center">
      <q-form ref="form" @submit="submitForm">
        <div class="q-gutter-xl" style="max-width: 700px">
          <q-input
            ref="f_name"
            v-model="first_name"
            label="FIRST NAME"
            :rules="[val=>!!val||'field is required' , val=>val.length>3||'name should have atleast 3 character']"
            stack-label
            size="600px"
          />
          <q-input
            v-model="last_name"
            label="LAST NAME"
            :rules="[val=>!!val||'field is required', val=>val.length>3||'name should have atleast 3 character']"
            ref="l_name"
            stack-label
            size="600px"
          />
          <q-input
            v-model="email"
            label="EMAIL"
            :rules="[val=>!!val||'field is required', val=>validateEmail||'Wrong email format.' ]"
            ref="email"
            type="email"
            stack-label
            size="600px"
          />
          <q-input
            v-model="password"
            label="PASSWORD"
            :type="visibility ? 'text' : 'password'"
            :rules="[val=>!!val||'field is required', val=>validatePassword||'Password must contains six characters with atleast one letter and one number.']"
            ref="pass"
            stack-label
            size="600px"
          >
            <template v-slot:append>
              <q-btn round dense flat :icon="visibility?'visibility_off':'visibility'" @click="visibility = !visibility" />
            </template>
          </q-input>
          <q-input
            v-model="confirm_password"
            label="RE TYPE PASSWORD"
            :type="visibility ? 'text' : 'password'"
            ref="c_pass"
            :rules="[val=>!!val||'field is required' , val=>matchPassword||'password does not match']"
            stack-label
            size="600px"
          >
          <template v-slot:append>
              <q-btn round dense flat :icon="visibility?'visibility_off':'visibility'" @click="visibility = !visibility" />
            </template>
          </q-input>
          <q-btn label="Register" class="float-right q-px-xl q-mt-md" type="submit" color="primary"/>
          <p class="bottom-text text-grey-7 q-pt-xl">
            Don't have an account?
            <span class="text-h6 text-indigo-9">
              <router-link class="link" to="/">LOGIN</router-link>
            </span>
          </p>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      visibility: false
    }
  },
  computed: {
    validateEmail () {
      var re = /\S+@\S+\.\S+/
      return re.test(this.email)
    },
    validatePassword () {
      // Minimum eight characters, at least one letter and one number:
      var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
      return re.test(this.password)
    },
    matchPassword () {
      return this.password === this.confirm_password
    }
  },
  methods: {
    submitForm () {
      this.$refs.form.validate().then(success => {
        if (success) {
          this.$q.notify({ message: 'Form Submitted' })
        } else {

        }
      })
    }
  }
}
</script>

<style>
.link{
  text-decoration: none;
}
</style>
