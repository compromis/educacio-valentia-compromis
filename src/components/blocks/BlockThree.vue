<template>
  <content-block current="three" next="four">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-three.svg" alt="" />
    </template>

    <p>{{ $t('blocks.three') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-three',

  components: {
    ContentBlock
  }
}
</script>
