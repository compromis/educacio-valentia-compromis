<template>
  <content-block current="eight">
    <template slot="graphic">
      <div v-if="$i18n.locale === 'es'">
        <img svg-inline src="../../assets/blocks/cas/block-eight.svg" alt="" />
      </div>
      <div v-else>
        <img svg-inline src="../../assets/blocks/block-eight.svg" alt="" />
      </div>
    </template>

    <p>{{ $t('blocks.eight') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-eight',

  components: {
    ContentBlock
  }
}
</script>
