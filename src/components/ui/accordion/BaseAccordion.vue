<script setup>
import { ref } from 'vue';

let isOpen = ref(null);

const data = [
  {
    title: 'What is Netclone',
    text: `Netclone is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries
          and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single advert
           – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week! `,
  },
  {
    title: 'How much does Netclone cost',
    text: `Watch Netclone on your smartphone, tablet, smart TV, laptop or streaming device, all for one fixed monthly fee.
          Plans range from 9$ to 159$ a month. No extra costs, no contracts.`,
  },

  {
    title: 'Where can I watch?',
    text: `Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netclone account to watch instantly on the
          web at netclone.dd.app from your personal computer or on any internet-connected device that offers the Netclone app,
          including smart TVs, smartphones, tablets, streaming media players and game consoles.
          You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on
          the go and without an internet connection. Take Netclone with you anywhere.`,
  },
  {
    title: 'How do I cancel?',
    text: `Netclone is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.
          There are no cancellation fees – start or stop your account at any time.`,
  },
  {
    title: 'What can I watch on Netclone?',
    text: `Netclone has an extensive library of feature films, documentaries, anime, award-winning Netclone originals, and more.
          Watch as much as you want, any time you want.`,
  },
];

function toggle(index) {
  isOpen.value !== index ? (isOpen.value = index) : (isOpen.value = null);
}
</script>

<template>
  <div :class="classes.wrapper" v-for="(item, index) in data" :key="data.title">
    <div :class="classes.accordion" @click="toggle(index)">
      <h2 :class="classes.title">{{ item.title }}</h2>
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
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/ui/accordion/base-accordion';
</style>
