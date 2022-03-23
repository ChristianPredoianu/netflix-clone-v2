<script setup>
import SignUpNav from '@/components/navs/SignUpNav.vue';
import ContinueBtn from '@/components/buttons/ContinueBtn.vue';
import SignUpForm from '@/components/forms/SignUpForm.vue';
</script>

<template>
  <SignUpNav />
  <div class="container">
    <main :class="classes.setUpAccount">
      <p :class="classes.infoParagraph">
        Step <span :class="classes.span">2</span> of
        <span :class="classes.span">2</span>
      </p>
      <h1 :class="classes.infoHeading">Finish setting up your account</h1>
      <h2 :class="classes.infoHeadingSecondary">
        Netflix is personalised for you. Create a password to watch Netflix on
        any device at any time.
      </h2>

      <div :class="classes.signUpForm">
        <SignUpForm />
      </div>
    </main>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/signup/step2';
</style>
