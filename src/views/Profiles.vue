<script setup>
import { shallowRef, onMounted } from "vue";
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
  <LogoNav />
  <section :class="classes.profiles">
    <div class="container">
      <Transition name="fade" mode="out-in">
        <component :is="currentComponent" @change-component="changeComponent" />
      </Transition>
    </div>
  </section>
</template>

<style lang="scss" module="classes">
@use '@/sass/views/profiles';
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
