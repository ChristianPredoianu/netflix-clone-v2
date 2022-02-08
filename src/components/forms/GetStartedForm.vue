<script setup>
import GetStartedBtn from '@/components/buttons/GetStartedBtn.vue';
</script>
<template>
  <div :class="classes.formContainer">
    <form :class="classes.getStartedForm" @submit.prevent="goToSignup">
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
