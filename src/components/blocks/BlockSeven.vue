<template>
  <content-block current="seven" next="eight">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-seven.svg" alt="" />
    </template>

    <p>
      Aposta per la innovació educativa: vora 6 milions
      d’euros en ajudes a projectes d’innovació.
    </p>
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
