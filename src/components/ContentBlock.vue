<template>
  <section class="block" :id="'block-' + current">
    <div class="container">
      <div class="block__container">
        <div class="block__graphic" v-animate="'slide-up'">
          <slot name="graphic"></slot>
        </div>
        <div class="block__text" v-animate="'slide-up'">
          <slot></slot>
        </div>
        <div v-if="next" class="block__next" v-animate="'slide-up'">
          <next-arrow :to="'block-' + next" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NextArrow from './buttons/NextArrow.vue'

export default {
  name: 'content-block',

  components: {
    NextArrow
  },

  props: {
    current: String,
    next: String
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.block {
  background-color: $white;
  margin-bottom: 0;
  border-top: 4px $light-gray dashed;

  &__container {
    max-width: $block-width;
    padding: 4rem 1rem;
    margin: 0 auto;
  }

  &__graphic {
    width: 90%;
    margin: 0 auto 1rem auto;
  }

  &__text {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: $basic-orange;
    line-height: 1.25;
  }

  p {
    font-size: 1.45rem;
    margin-bottom: 2rem;
  }

  a {
    color: $campaign-color;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: $mobile-breakpoint) {
  .content-block {
    padding: 0 5rem 0 1rem;

    &__container {
      padding: 5rem 1rem;
    }

    &__title {
      line-height: 1.25;
    }

    p {
      font-size: 1.25rem;
    }
  }
}
</style>
