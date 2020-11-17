<template>
  <div id="header" class="header-menu">
    <div id="website-title" class="header-title">
      <img id="logo_FDR" :src="`${path}logo_FDR.png`" width="185" height="150" alt="logo">
      <div class="title">
        <h2>Baromètre de la</h2>
        <h1>Transition énergétique en Île-de-France</h1>
      </div>
      <img id="logo-pref" :src="`${path}logo_prif.png`" width="185" height="150" alt="logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    path: String,
  },
   data () {
     return {
       btns: [
         'Chiffres clés',
         'Bilans thématiques',
         'Bilans sectoriels',
         'Liens utiles',
         'Nous contacter'
       ]
     }
   }
}
</script>

<style>
  .header-menu {
    width: 100%;
  }

  .header-title {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .header-title .title {
    margin-top: 1em;
  }

  .header-menu .header {
    justify-content: space-between;
  }

</style>