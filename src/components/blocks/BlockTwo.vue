<template>
  <content-block current="two" next="three" class="block-two">
    <template slot="graphic">
      <div v-if="$i18n.locale === 'es'">
        <img svg-inline src="../../assets/blocks/cas/block-two.svg" alt="" />
      </div>
      <div v-else>
        <img svg-inline src="../../assets/blocks/block-two.svg" alt="" />
      </div>
    </template>

    <p>{{ $t('blocks.two') }}</p>
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
