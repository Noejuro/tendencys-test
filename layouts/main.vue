<template>
  <v-app >
      <v-col class="pa-0 base-container">
        <siteHeader />
        <Nuxt />
        <siteFooter />
      </v-col>
  </v-app>
</template>

<script>
  import siteHeader from '@/components/siteHeader.vue'
  import siteFooter from '@/components/siteFooter.vue'

  export default {
      components: { siteHeader, siteFooter }
  }
</script>

<style>
    @media only screen and (max-width: 960px) {
        .main-container { min-height: calc( 100% - 177px ) !important; }
    }

    .row { margin: 0px !important; }
    .base-container { background-color: #EEEEEE; }
    .main-container { min-height: calc( 100% - 170px ); }
    .site-btn { color: white !important; text-transform: none !important; }
</style>