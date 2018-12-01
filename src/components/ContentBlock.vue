<template>
  <section class="block" :id="'block-' + current">
    <div class="container">
      <div class="block__container">
        <div class="block__graphic" v-animate="'slide-up'">
          <div class="block__graphic__adjuster"><slot name="graphic"></slot></div>
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
    position: relative;
    height: 93vh;
    overflow: hidden;
    max-width: $block-width;
    padding: 3rem 1rem;
    margin: 0 auto;
  }

  &__graphic {
    position: absolute;
    display: flex;
    top: 2rem;
    bottom: 10rem;
    left: 2rem;
    right: 2rem;
    margin: 0 auto 1rem auto;
    align-items: flex-end;

    &__adjuster {
      width: 100%;
    }

    svg {
      max-height: 100%;
      max-width: 100%;
      margin: 0 auto;
    }
  }

  &__text {
    position: absolute;
    bottom: 3rem;
    left: 2rem;
    right: 2rem;
    text-align: center;
    font-size: 2rem;
    color: $basic-orange;
    line-height: 1.25;

    p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }
  }

  &__next {
    position: absolute;
    bottom: 1rem;
    left: 0;
    right: 0;
  }

  a {
    color: $campaign-color;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (min-width: $mobile-breakpoint) {
  .block {
    &__graphic {
      max-width: 500px;
    }

    &__text {
      bottom: 5.5rem;

      p {
        font-size: 1.45rem;
        max-width: 550px;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: $mobile-breakpoint) {
  .block {
    &__container {
      height: auto;
    }

    &__graphic,
    &__text,
    &__next {
      position: static;
    }

    &__next {
      display: none;
    }
  }
}

@media (min-height: 550px) and (max-height: 650px) {
  .block {
    &__graphic {
      max-width: 300px;
    }
  }
}

@media (min-height: 650px) and (max-height: 850px) {
  .block {
    &__graphic {
      max-width: 400px;
    }
  }
}
</style>
