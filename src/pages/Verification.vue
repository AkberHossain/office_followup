<template>
  <q-page padding>
    <!-- content -->
    <div class="center-portion q-pa-lg row flex-center">
      <div class="q-gutter-xl" style="max-width: 600px">
        <p>We have sent you an email with a verification code in order to verify your account.Please enter it here</p>
        <q-input label="Verification Code" stack-label size="600px" />
        <q-btn label="Verify" class="q-px-xl" type="submit" color="primary"/>
        <p>If you did not recieve an email within 5 minutes, then you could re-generate one.</p>
        <q-btn label="Re-send Code" class="q-px-xl" type="submit" color="primary"/>
      </div>
     </div>
  </q-page>
</template>

<script>
export default {
  name: 'Verification'
}
</script>

<style>
.center-portion{
  margin-top:200px;
  font-size:18px;
}
.q-field__label{
  font-size:22px;
  padding-bottom:50px;
}

</style>
