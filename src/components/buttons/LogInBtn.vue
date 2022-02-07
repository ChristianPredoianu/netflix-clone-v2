<script setup>
import classes from '../../sass/components/buttons/LogInBtn.module.scss';
</script>

<template>
  <div>
    <button :class="classes.logInBtn">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
