<template>
  <content-block current="five" next="six">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-five.svg" alt="" />
    </template>

    <p>
      Avancem cap a la universalització
      de l’ensenyament 0-3 anys. Més de
      14.400 places gratuïtes.
    </p>
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
