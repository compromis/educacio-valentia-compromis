<template>
  <content-block current="intro" next="one" class="intro-block">
    <template slot="graphic">
      <h1>
        <span class="education">
          <img src="../../assets/education.svg" class="icon" alt="" />
          {{ $t('global.education') }}
        </span>
        <span class="bravery">
          <img src="../../assets/bravery.svg" class="icon" alt="" />
          {{ $t('global.bravery') }}
        </span>
        <span class="committment">
          <img src="../../assets/committment.svg" class="icon" alt="" />
          {{ $t('global.committment') }}
        </span>
      </h1>
      <language-switcher />
    </template>

    <p>{{ $t('blocks.intro') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'
import LanguageSwitcher from '../LanguageSwitcher.vue'

export default {
  name: 'intro-block',

  components: {
    ContentBlock,
    LanguageSwitcher
  }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.block.intro-block {
  border-top: 0;

  .container {
    display: flex;
    align-items: flex-end;
    min-height: 93vh;
  }
  .block__container {
    height: auto;
    overflow: visible;
  }

  h1 {
    color: $basic-orange;
    font-size: 3.5rem;
    letter-spacing: -2px;
    line-height: 1.2;

    span {
      position: relative;
      display: block;
    }

    .icon {
      width: 70px;
      height: 70px;
      position: absolute;
      left: -80px;
      top: -5px;
    }

    .education {
      animation: blink .75s;
    }

    .bravery {
      animation: blink .75s;
      animation-delay: .75s;
    }

    .committment {
      animation: blink .75s;
      animation-delay: 1.5s;
    }
  }

  .language-switcher {
    margin-top: 1rem;
  }

  .block__graphic,
  .block__text,
  .block__next {
    position: static;
    max-width: 700px;
    margin: 0 auto;
  }

  .block__text {
    font-size: 1rem;
    margin: 2rem auto;

    p {
      text-align: left;
      max-width: 100%;
    }
  }
}
</style>
