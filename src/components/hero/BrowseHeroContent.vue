<template>
  <div :class="classes.heroContent">
    <div :class="classes.heroHeadings">
      <h1 :class="classes.heroPrimaryHeading">The Jack in the box: Awakening</h1>
      <h2 :class="classes.heroSecondaryHeading">
        When a vintage Jack-in-the-box is opened by a dying woman, she enters into a deal
        with the demon within that would see her illness cured in return for helping it
        claim six innocent victims.
      </h2>
    </div>
    <div :class="classes.heroCta">
      <button :class="[classes['btn'], classes['btn--play']]">
        <span :class="classes.btnSpan"><font-awesome-icon icon="play" /></span>Play
      </button>
      <button :class="[classes['btn'], classes['btn--info']]">
        <span :class="classes.btnSpan"><font-awesome-icon icon="info-circle" /></span
        >MoreInfo
      </button>
    </div>
  </div>
</template>

<style lang="scss" module="classes">
@use '@/sass/components/hero/browse-hero-content';
</style>
