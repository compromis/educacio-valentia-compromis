<template>
  <content-block current="one" next="two">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-one.svg" alt="" />
    </template>

    <p>
      Hem acabat amb les retallades
      en educació del PP. Estem recuperant
      la dignitat de l’educació pública.
    </p>
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
