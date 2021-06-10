<template>
</template>

<script>
  export default {
    mounted() {
      this.getProducts();
    },
    methods: {
      getProducts() {
         var token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ';
         // GET RECOMENDACIONES
         this.$store.dispatch("GET", {url: 'orders', headers: { 'Authorization': token } })
            .then(response => {
               if (process.env.NODE_ENV == 'development')
                  console.log(`%cRESPONSE`, 'color: green; font-weight: bold;', response);
               
            }).catch(error => {
               console.log(`%cERROR`, 'color: red; font-weight: bold;', error);
         }); 
      }
    }
  }
</script>

<style>
</style>
