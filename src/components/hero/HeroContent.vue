<script setup>
import GetStartedForm from '@/components/forms/GetStartedForm.vue';
</script>

<template>
  <div :class="classes.heroContent">
    <h1 :class="[classes.headingPrimary]">
      Unlimited access to movies, series and other.
    </h1>
    <h2 :class="[classes.headingSecondary, classes.heroSecondaryHeading]">
      Watch where you want. Unsubscribe when you want
    </h2>
    <p :class="classes.heroParagraph">
      Ready to start watching? Fill in your e-mail to create an account.
    </p>
    <div :class="classes.heroForm">
      <GetStartedForm />
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/hero/hero-content';
</style>
