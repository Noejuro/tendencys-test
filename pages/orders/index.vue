<template>
   <v-row class="main-container">
      <v-col class="py-0" align-self="center">
         <ordersList :orders="clientOrders" />
      </v-col>
   </v-row>
</template>

<script>
   import ordersList from '@/components/orders/ordersList.vue';
   export default {
      layout: 'main',
      components: { ordersList },
      data() {
         return{
            clientOrders: []
         } 
      },
      mounted() {
         this.getOrders();
      },
      methods: {
         getOrders() {
            var token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ';
            // GET ORDERS
            this.$store.dispatch("GET", {url: 'orders', headers: { 'Authorization': token } })
               .then(response => {
                  if (process.env.NODE_ENV == 'development')
                     console.log(`%cORDERS:`, 'color: green; font-weight: bold;', response);
                  this.clientOrders = response.data.orders;
                  
               }).catch(error => {
                  console.log(`%cERROR`, 'color: red; font-weight: bold;', error);
            }); 
         }
      }
   }
</script>

<style>
</style>