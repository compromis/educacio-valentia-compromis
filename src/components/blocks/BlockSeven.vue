<template>
  <content-block current="seven" next="eight">
    <template slot="graphic">
      <div v-if="$i18n.locale === 'es'">
        <img svg-inline src="../../assets/blocks/cas/block-seven.svg" alt="" />
      </div>
      <div v-else>
        <img svg-inline src="../../assets/blocks/block-seven.svg" alt="" />
      </div>
    </template>

    <p>{{ $t('blocks.seven') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-seven',

  components: {
    ContentBlock
  }
}
</script>
