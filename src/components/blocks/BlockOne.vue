<template>
  <content-block current="one" next="two">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-one.svg" alt="" />
    </template>

    <p>{{ $t('blocks.one') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-one',

  components: {
    ContentBlock
  }
}
</script>
