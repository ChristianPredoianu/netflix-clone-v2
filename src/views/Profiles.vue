<script setup>
import { shallowRef } from 'vue';
import LogoNav from '@/components/navs/LogoNav.vue';
import UserProfiles from '@/components/profiles/UserProfiles.vue';

let currentComponent = shallowRef(UserProfiles);

function changeComponent(comp) {
  currentComponent.value = comp;
}
</script>

<template>
  <div :class="classes.profiles">
    <LogoNav />
    <div class="container">
      <transition name="fade">
        <component :is="currentComponent" @change-component="changeComponent" />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/profiles';
</style>
