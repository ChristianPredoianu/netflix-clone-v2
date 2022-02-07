<script setup>
import GetStartedBtn from '@/components/buttons/GetStartedBtn.vue';
import classes from '@/sass/components/forms/GetStartedForm.module.scss';
</script>
<template>
  <div>
    <form :class="classes.getStartedForm" @submit.prevent="goToSignup">
      <input
        type="email"
        placeholder="E-mail"
        class="get-started__input"
        required
      />

      <GetStartedBtn />
    </form>
  </div>
</template>

<style lang="scss"></style>
