<template>
  <content-block current="three" next="four">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-three.svg" alt="" />
    </template>

    <p>
      1.183 euros més d’inversió per
      alumne/a que en 2014.
    </p>
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
