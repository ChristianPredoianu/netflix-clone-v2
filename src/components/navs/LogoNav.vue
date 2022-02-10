<script setup>
import NetflixLogo from '@/components/ui/NetflixLogo.vue';
</script>

<template>
  <div>
    <header :class="classes.header">
      <nav>
        <NetflixLogo />
      </nav>
    </header>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/navs/logo-nav';
</style>
