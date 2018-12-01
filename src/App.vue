<template>
  <div id="app">
    <header>
      <top-nav />
    </header>
    <main>
      <intro-block />
      <block-one />
      <block-two />
      <block-three />
      <block-four />
      <block-five />
      <block-six />
      <block-seven />
      <block-eight />
    </main>
    <page-footer />
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import IntroBlock from './components/blocks/IntroBlock.vue'
import BlockOne from './components/blocks/BlockOne.vue'
import BlockTwo from './components/blocks/BlockTwo.vue'
import BlockThree from './components/blocks/BlockThree.vue'
import BlockFour from './components/blocks/BlockFour.vue'
import BlockFive from './components/blocks/BlockFive.vue'
import BlockSix from './components/blocks/BlockSix.vue'
import BlockSeven from './components/blocks/BlockSeven.vue'
import BlockEight from './components/blocks/BlockEight.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  name: 'app',

  components: {
    TopNav,
    IntroBlock,
    BlockOne,
    BlockTwo,
    BlockThree,
    BlockFour,
    BlockFive,
    BlockSix,
    BlockSeven,
    BlockEight,
    PageFooter
  }
}
</script>

<style lang="scss">
@import 'scss/variables';
@import 'scss/fonts';
@import 'scss/global';
@import 'scss/animations';
@import 'scss/blocks';
</style>
