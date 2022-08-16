<script setup>
import { ref } from 'vue';
import { accordionData } from '@/components/ui/accordion/accordionData';

let isOpen = ref(null);

function toggle(index) {
  isOpen.value !== index ? (isOpen.value = index) : (isOpen.value = null);
}
</script>

<template>
  <div
    :class="classes.wrapper"
    v-for="(accordionItem, index) in accordionData"
    :key="accordionItem.title"
  >
    <div :class="classes.accordion" @click="toggle(index)">
      <h2 :class="classes.title">{{ accordionItem.title }}</h2>
      <font-awesome-icon
        icon="plus-circle"
        v-if="isOpen !== index"
        :class="classes.accordionIcon"
      />
      <font-awesome-icon
        icon="times"
        v-if="isOpen === index"
        :class="classes.accordionIcon"
      />
    </div>
    <div v-if="isOpen === index" :class="classes.content">
      <p>{{ accordionItem.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/accordion/base-accordion';
</style>
