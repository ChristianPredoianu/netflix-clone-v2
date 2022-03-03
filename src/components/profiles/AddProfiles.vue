<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import UserProfiles from "@/components/profiles/UserProfiles.vue";
import ContinueBtn from "@/components/buttons/ContinueBtn.vue";
import ProfilesBtn from "@/components/buttons/ProfilesBtn.vue";

const store = useStore();
const emits = defineEmits(["change-component"]);

const profileName = ref(null);
const maxProfilesMessage = computed(() => store.state.userProfiles.maxProfilesMessage);

function addProfile() {
  const profile = {
    name: profileName.value,
    icon: "smile",
  };
  store.dispatch("ADD_PROFILE", profile);
}

function backToUserProfiles() {
  emits("change-component", UserProfiles);
}

onMounted(() => {
  store.dispatch("RESET_MAX_PROFILES_MESSAGE");
});
</script>

<template>
  <div :class="classes.addProfilesWrapper">
    <h1 :class="classes.profileHeading">Add a profile</h1>
    <h2 :class="classes.profileSecondaryHeading">
      Add a profile for another person watching Netclone
    </h2>

    <div :class="classes.profileFormWrapper">
      <font-awesome-icon icon="smile" :class="classes.icon" />
      <input
        type="text"
        required
        placeholder="Name"
        v-model="profileName"
        :class="classes.profileInput"
      />
    </div>
    <p>{{ maxProfilesMessage }}</p>
    <div :class="classes.ctaWrapper">
      <div :class="classes.continueBtn">
        <ContinueBtn @click="addProfile">Continue</ContinueBtn>
      </div>
      <ProfilesBtn @click="backToUserProfiles">Back</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/add-profiles';
</style>
