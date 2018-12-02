<template>
  <content-block current="four" next="five">
    <template slot="graphic">
      <div v-if="$i18n.locale === 'es'">
        <img svg-inline src="../../assets/blocks/cas/block-four.svg" alt="" />
      </div>
      <div v-else>
        <img svg-inline src="../../assets/blocks/block-four.svg" alt="" />
      </div>
    </template>

    <p>{{ $t('blocks.four') }}</p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-four',

  components: {
    ContentBlock
  }
}
</script>
