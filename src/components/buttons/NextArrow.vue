<template>
  <div class="next-arrow">
    <a :href="'#' + to" v-smooth-scroll="{ offset: -45 }">
      <img svg-inline src="../../assets/arrow.svg" class="next-arrow__svg" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'next-arrow',

  props: {
    to: String
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.next-arrow {
  text-align: center;

  a {
    display: block;
    color: $basic-orange;
    opacity: 0.4;
    transition: 0.25s ease-in-out;

    &:hover,
    &:focus {
      opacity: 1;

      .next-arrow__text {
        opacity: 1;
      }
    }
  }

  &__svg {
    width: 40px;
    height: 40px;
  }

  &__text {
    opacity: 0;
    transition: 0.25s ease-in-out;
    font-size: 1.25rem;
    margin-left: 1rem;
  }
}
</style>
