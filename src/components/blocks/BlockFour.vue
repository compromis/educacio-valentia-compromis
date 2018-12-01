<template>
  <content-block current="four" next="five">
    <template slot="graphic">
      <img svg-inline src="../../assets/blocks/block-four.svg" alt="" />
    </template>

    <p>
      705 euros d’estalvi familiar amb
      renda habitual per fill/a en la tornada a l’escola
      gràcies a Xarxa Llibres i les beques de menjador.
    </p>
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
