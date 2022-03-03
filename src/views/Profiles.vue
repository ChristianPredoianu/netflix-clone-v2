<script setup>
import { shallowRef, onMounted, computed } from "vue";
import { useStore } from "vuex";

import LogoNav from "@/components/navs/LogoNav.vue";
import UserProfiles from "@/components/profiles/UserProfiles.vue";

let currentComponent = shallowRef(UserProfiles);

const store = useStore();

function changeComponent(comp) {
  currentComponent.value = comp;
}

onMounted(() => {
  store.dispatch("SET_CURRENT_USER");
  store.dispatch("SET_USER_PROFILES_FROM_DB");
});
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
