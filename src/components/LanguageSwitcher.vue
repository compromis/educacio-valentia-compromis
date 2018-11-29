<template>
  <div class="language-switcher tabs is-toggle">
    <ul>
      <li :class="{ 'is-active': $i18n.locale === 'ca' }">
        <a href="#" @click.prevent="switchLanguage('ca')">Valencià</a>
      </li>
      <li :class="{ 'is-active': $i18n.locale === 'es' }">
        <a href="#" @click.prevent="switchLanguage('es')">Castellano</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'language-switcher',

  methods: {
    switchLanguage (lang) {
      this.$i18n.locale = lang
      document.documentElement.lang = lang
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables';

.language-switcher {
  a {
    background: $white;
    color: $text-color;
    padding: 0.25rem 1rem;

    &:hover {
      background: $light-gray;
    }
  }

  li.is-active {
    a {
      background: $campaign-color;
      border-color: darken($campaign-color, 5%);
      color: $white;

      &:hover {
        background: darken($campaign-color, 5%);
        border-color: darken($campaign-color, 10%);
      }
    }
  }
}
</style>
