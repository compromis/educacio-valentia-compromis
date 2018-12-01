<template>
  <content-block current="eight">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-eight.svg" alt="" />
    </template>

    <p>
      Invertim 395 milions d’euros per a la
      millora i construcció de centres educatius.
    </p>
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
