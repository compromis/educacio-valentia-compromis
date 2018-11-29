<template>
  <div id="app">
    <header>
      <top-nav />
      <side-nav />
    </header>
    <main>
      <intro-block />
    </main>
    <page-footer />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import SideNav from './components/SideNav.vue'
import IntroBlock from './components/blocks/IntroBlock.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',

  components: {
    TopNav,
    IntroBlock,
    SideNav,
    PageFooter
  }
}
</script>

<style lang="scss">
@import 'scss/variables';
@import 'scss/fonts';
@import 'scss/global';
@import 'scss/animations';
</style>
