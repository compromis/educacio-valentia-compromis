<template>
  <section id="intro">
    <div class="intro-block">
      <div class="container">
        <h1>
          <span>educació</span>
          <span>valentia</span>
          <span>compromís</span>
        </h1>

        <language-switcher />

        <div>
          L’educació és la millor eina per construir una societat més justa i inclusiva. Hem de formar una ciutadania lliure, crítica i culta. Aquest és el model educatiu del Govern del Botànic i de Compromís: millorar la qualitat educativa per corregir les desigualtats, no per reproduir-les. El repte és difícil, però estem avançant molt i seguirem fent-ho amb valentia.
        </div>

        <next-arrow to="que-es" v-animate="'slide-up'">
          {{ $t('sections.whatisit') }}
        </next-arrow>
      </div>
    </div>
  </section>
</template>

<script>
import LanguageSwitcher from '../LanguageSwitcher.vue'
import NextArrow from '../buttons/NextArrow.vue'

export default {
  name: 'intro-block',

  components: {
    LanguageSwitcher,
    NextArrow
  }
}
</script>

<style scoped lang="scss">
@import '../../scss/variables';

.intro-block {
  background: $background-color;
  padding: 3rem 1rem;

  h1 {
    color: $basic-orange;
    font-size: 4rem;
    letter-spacing: -2px;

    span {
      display: block;
    }
  }
}
</style>
