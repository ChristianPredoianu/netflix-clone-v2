<script setup>
import { shallowRef, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import LogoNav from '@/components/navs/LogoNav.vue';
import UserProfiles from '@/components/profiles/UserProfiles.vue';

onMounted(async () => {
  await store.dispatch('SET_CURRENT_USER');
  await store.dispatch('SET_USER_PROFILES_FROM_DB');
});

let currentComponent = shallowRef(UserProfiles);

const store = useStore();

const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function changeComponent(comp) {
  currentComponent.value = comp;
}
</script>

<template>
  <LogoNav />
  <section :class="classes.profiles">
    <div class="container">
      <Transition name="fade" mode="out-in">
        <component
          :is="currentComponent"
          @change-component="changeComponent"
          :userProfiles="userProfiles.value"
        />
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
