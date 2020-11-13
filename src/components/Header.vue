<template>
  <div id="header" class="header-menu">
    <div id="website-title" class="header-title">
      <img id="logo-pref" :src="`${path}logo_prif.png`" width="185" height="150" alt="logo">
      <h2>Baromètre de la</h2>
      <h1>Transition énergétique en Île-de-France</h1>
    </div>
    <b-navbar class="header" toggleable="lg" type="dark" sticky variant="info" v-b-scrollspy:nav-scroller>
      <b-navbar-toggle target="navbar-collapse"></b-navbar-toggle>
      <b-collapse id="navbar_collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{name: 'tdb'}">Chiffres clés</b-nav-item>
          <b-nav-item-dropdown text="Bilans thématiques">
            <b-dropdown-item :to="{name: 'conso'}">Consommations énergétiques</b-dropdown-item>
            <b-dropdown-item :to="{name: 'emiss'}">Émissions de GES</b-dropdown-item>
            <b-dropdown-item :to="{name: 'air'}">Qualité de l'air</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Bilans sectoriels">
            <b-dropdown-item :to="{name: 'reno'}">Rénovation énergétique</b-dropdown-item>
            <b-dropdown-item :to="{name: 'preca'}">Précarité énergétique</b-dropdown-item>
            <b-dropdown-item :to="{name: 'mobi'}">Transports</b-dropdown-item>
            <b-dropdown-item :to="{name: 'chal'}">Chaleur renouvelable</b-dropdown-item>
            <b-dropdown-item :to="{name: 'enr'}">Autres ENR</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/tableau-de-bord">Liens utiles</b-nav-item>
          <b-nav-item to="/tableau-de-bord">Nous contacter</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
    position: relative;
    width: 100%;
  }

  .header-title {
    display: inline-block;
    width: 100%;
  }
</style>