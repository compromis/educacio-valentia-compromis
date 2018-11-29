<template>
  <section id="intro">
    <div class="intro-block">
      <div class="container">
        Name
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

</style>
