<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import ManageProfiles from "@/components/profiles/ManageProfiles.vue";
import ContinueBtn from "@/components/buttons/ContinueBtn.vue";
import ProfilesBtn from "@/components/buttons/ProfilesBtn.vue";

const emits = defineEmits(["change-component"]);
const store = useStore();

const newProfileName = ref("");

const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function componentChange(comp) {
  emits("change-component", comp);
}
</script>

<template>
  <div :class="classes.editProfileWrapper">
    <div
      :class="classes.profileInfo"
      v-for="userProfile in userProfiles"
      :key="userProfile.id"
    >
      <font-awesome-icon :icon="userProfile.icon" :class="classes.icon" />
      <input type="text" placeholder="Name" :v-model="userProfile.name" />
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/edit-profiles';
</style>
