<template>
  <content-block current="five" next="six">
    <template slot="graphic">
      <div v-if="$i18n.locale === 'es'">
        <img svg-inline src="../../assets/blocks/cas/block-five.svg" alt="" />
      </div>
      <div v-else>
        <img svg-inline src="../../assets/blocks/block-five.svg" alt="" />
      </div>
    </template>

    <p>{{ $t('blocks.five') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-five',

  components: {
    ContentBlock
  }
}
</script>
