<template>
  <content-block current="two" next="three" class="block-two">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-two.svg" alt="" />
    </template>

    <p>
      Més professorat treballant per una millor
      educació: 6.051 docents més que amb el PP.
    </p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-two',

  components: {
    ContentBlock
  }
}
</script>

<style lang="scss">
@import '../../scss/variables';

@media (max-height: 900px) {
  .block.block-two {
    .block__graphic {
      max-width: 300px;
    }
  }
}
</style>
