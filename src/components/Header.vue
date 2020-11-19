<template>
  <div id="website-title" class="header-title">
    <img id="logo_FDR" :src="`${path}logo_FDR.png`" width="185" height="150" alt="logo">
    <div class="title">
      <h2>Baromètre de la</h2>
      <h1>Transition énergétique en Île-de-France</h1>
    </div>
    <img id="logo-pref" :src="`${path}logo_prif.png`" width="185" height="150" alt="logo">
  </div>
</template>

<script>

export default {
  name: 'PageHeader',
  props: {
    path: String,
  },
  computed: {
    options () {
      return {
        duration: 1000,
        offset: +40,
        easing: 'easeInOutQuad',
      }
    }
   }
}
</script>

<style>
  .header-title {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 2em;
  }

  .header-title .title {
    margin-top: 1em;
  }

</style>