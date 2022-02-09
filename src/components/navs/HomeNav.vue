<script setup>
import NetflixLogo from '@/components/ui/NetflixLogo.vue';
import SignInBtn from '@/components/buttons/SignInBtn.vue';
</script>

<template>
  <div>
    <header :class="classes.header">
      <nav :class="classes.nav">
        <NetflixLogo />
        <SignInBtn>Sign In</SignInBtn>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/navs/home-nav';
</style>
