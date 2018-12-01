<template>
  <content-block current="intro" next="one" class="intro-block">
    <template slot="graphic">
      <h1>
        <span>educació</span>
        <span>valentia</span>
        <span>compromís</span>
      </h1>
      <language-switcher />
    </template>

    <p>
      L’educació és la millor eina per construir una societat més justa i inclusiva. Hem de formar una ciutadania lliure, crítica i culta. Aquest és el model educatiu del Govern del Botànic i de Compromís: millorar la qualitat educativa per corregir les desigualtats, no per reproduir-les. El repte és difícil, però estem avançant molt i seguirem fent-ho amb valentia.
    </p>
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
  }

  h1 {
    color: $basic-orange;
    font-size: 3.5rem;
    letter-spacing: -2px;
    line-height: 1.2;

    span {
      display: block;
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
