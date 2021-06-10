<template>
    <v-row>
        <v-col>
            <dialogAddProducts :dialog="dialogAddProducts" @closeDialog="dialogAddProducts = false" @saveProduct="saveProduct" />
            <!-- Add product -->
            <v-row>
                <v-btn color="success" @click="dialogAddProducts = true"> Agregar producto </v-btn>
            </v-row>
            <!-- Order products and Details -->
            <v-row>
                <v-col>
                    <orderProducts :products="order.items" />
                </v-col>
                <v-col>
                    <orderDetails :orderDetails="order" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import orderDetails from '@/components/orderDetails/orderDetails.vue'
import orderProducts from '@/components/orderDetails/orderProducts.vue'
import dialogAddProducts from '@/components/orderDetails/dialogAddProducts.vue'

export default {
    layout: 'main',
    components: { orderDetails, orderProducts, dialogAddProducts },
    data() {
        return {
            order: {},
            orderID: this.$router.currentRoute.params.ID,
            dialogAddProducts: false,
        }
    },
    beforeMount() {
        this.getOrderDetails();
    },
    methods: {
         getOrderDetails() {
            var token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ';
            // GET ORDERS
            this.$store.dispatch("GET", { url: 'orders', headers: { 'Authorization': token } })
               .then(response => {
                  if (process.env.NODE_ENV == 'development')
                     console.log(`%cORDERS:`, 'color: green; font-weight: bold;', response);

                  this.order = this.findOrder(response.data.orders)
                  console.log("Order Details: ", this.order)
                  
               }).catch(error => {
                  console.log(`%cERROR`, 'color: red; font-weight: bold;', error);
            }); 
         },
         findOrder(data) {
             return data.find( order => order.number === this.orderID );
         },
         saveProduct(newProduct) {
             console.log("Product to be saved: ", newProduct )
             this.order.items.unshift(Object.assign({}, newProduct))
             this.dialogAddProducts = false;
         }
      }
}
</script>