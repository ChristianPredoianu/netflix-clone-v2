<script setup>
import GetStartedBtn from '@/components/buttons/GetStartedBtn.vue';
import router from '../../router';

function goToSignupHandler() {
  router.push({ name: 'SignupStep1' });
}
</script>
<template>
  <div :class="classes.formContainer">
    <form :class="classes.getStartedForm" @submit.prevent="goToSignupHandler">
      <input
        type="email"
        :class="classes.getStartedInput"
        placeholder="E-mail"
        required
      />
      <GetStartedBtn />
    </form>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/forms/get-started-form';
</style>
