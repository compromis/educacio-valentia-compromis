<template>
  <content-block current="six" next="seven">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-six.svg" alt="" />
    </template>

    <p>
      Menys alumnes per aula. Hem abaixat
      entre 5 i 7 alumnes la ràtio màxima.
    </p>
  </content-block>
</template>

<script>
import ContentBlock from '../ContentBlock.vue'

export default {
  name: 'block-six',

  components: {
    ContentBlock
  }
}
</script>
