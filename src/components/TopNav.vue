<template>
  <nav class="top-nav is-fixed-top">
    <div class="top-nav__brand">
      <a href="https://compromis.net">
        <img src="https://compromis.net/wp-content/themes/Compromis/images/logo-compromis-retina.png" alt="Compromís" />
      </a>
    </div>

    <div class="top-nav__title">
      {{ $t('global.education') }} · {{ $t('global.bravery') }} · {{ $t('global.committment') }}
    </div>

    <SocialButtons />
  </nav>
</template>

<script>
import SocialButtons from './SocialButtons.vue'

export default {
  name: 'top-nav',

  components: {
    SocialButtons
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.top-nav {
  display: flex;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  background: linear-gradient(270deg, $orange-start, $orange-end);
  background-size: 200% 100%;
  animation: HeaderOrange 15s ease infinite;
  box-shadow: 0 1px 50px -10px rgba(0, 0, 0, .3);

  &__brand {
    flex-shrink: 0;
    background: #fff;
    padding: 0.5rem 1rem;
    transition: 0.2s ease-in-out;

    a {
      display: block;
      background: #fff;
      overflow: hidden;
      width: 29px;
      transition: width 0.2s ease-in-out;
    }

    img {
      width: 160px;
      max-width: 160px;
    }

    &:hover {
      a {
        width: 160px;
      }
    }
  }

  &__title {
    display: flex;
    align-items: center;
    margin-right: auto;
    color: #fff;
    font-size: 1.25rem;
    margin: 0 auto 0 20px;
    letter-spacing: -0.02rem;
    white-space: nowrap;
  }
}

/* When title cannot fit */
@media (max-width: 360px) {
  .top-nav__title::after {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 50px;
      background: linear-gradient(to right, rgba($orange-end, 0), rgba($orange-end, 1));
      width: 2rem;
  }
}
</style>
