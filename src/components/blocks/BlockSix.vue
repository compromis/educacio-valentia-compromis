<template>
  <content-block current="six" next="seven">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-six.svg" alt="" />
    </template>

    <p>{{ $t('blocks.six') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-six',

  components: {
    ContentBlock
  }
}
</script>
