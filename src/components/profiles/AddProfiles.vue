<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import UserProfiles from "@/components/profiles/UserProfiles.vue";
import ContinueBtn from "@/components/buttons/ContinueBtn.vue";
import ProfilesBtn from "@/components/buttons/ProfilesBtn.vue";

const store = useStore();
const emits = defineEmits(["change-component"]);

const profileName = ref("");
let addErrorMsg = ref(null);

const maxProfilesMessage = computed(() => store.state.userProfiles.maxProfilesMessage);
const userProfiles = computed(() => store.state.userProfiles.userProfiles);

function addProfile() {
  const profile = {
    name: profileName.value,
    icon: "smile",
  };

  if (!profileName.value) {
    addErrorMsg.value = "Please enter a user name";
  } else if (userProfiles.value.length >= 5) {
    store.dispatch("SET_MAX_PROFILES_MESSAGE");
  } else {
    store.dispatch("ADD_PROFILE", profile);
    store.dispatch("RESET_MAX_PROFILES_MESSAGE");
    emits("change-component", UserProfiles);
  }
}

function componentChange() {
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
        placeholder="Name"
        v-model="profileName"
        :class="[
          profileName.length > 0
            ? [classes.profileInput, classes.validInput]
            : classes.profileInput,
        ]"
      />
    </div>
    <p>{{ maxProfilesMessage }}</p>

    <p v-if="addErrorMsg">{{ addErrorMsg }}</p>
    <div :class="classes.ctaWrapper">
      <div :class="classes.continueBtn">
        <ContinueBtn @click="addProfile">Continue</ContinueBtn>
      </div>
      <ProfilesBtn @click="componentChange">Back</ProfilesBtn>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/profiles/add-profiles';
</style>
