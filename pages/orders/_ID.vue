<template>
    <v-row class="main-container">
        <v-col>
            <!-- Add Product Form Dialog -->
            <dialogAddProducts :dialog="dialogAddProducts" @closeDialog="dialogAddProducts = false" @saveProduct="saveProduct" />
            <!-- Succes Payment Dialog -->
            <dialogSuccessPayment :dialog="dialogSuccessPayment" @closeDialog="dialogSuccessPayment = false" />
            <!-- Order products and Details -->
            <v-row align="start" justify="center">
                <v-col cols="12" md="" order="2" order-md="1">
                    <orderProducts :products="order.items" />
                </v-col>
                <v-col cols="auto" class="sticky-block" order="1" order-md="2">
                    <orderDetails :orderDetails="order" @openSuccessPaymentDialog="dialogSuccessPayment = true" />
                    <!-- Add product -->
                    <v-row class="pt-1 pt-md-6">
                        <v-card class="add-card">
                            <v-col class="py-5">
                                <v-btn color="#F64C72" class="site-btn" block @click="dialogAddProducts = true"> Add product </v-btn>
                            </v-col>
                        </v-card>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import orderDetails from '@/components/orderDetails/orderDetails.vue'
import orderProducts from '@/components/orderDetails/orderProducts.vue'
import dialogAddProducts from '@/components/orderDetails/dialogAddProducts.vue'
import dialogSuccessPayment from '@/components/orderDetails/dialogSuccessPayment.vue'

export default {
    layout: 'main',
    components: { orderDetails, orderProducts, dialogAddProducts, dialogSuccessPayment },
    data() {
        return {
            order: {},
            orderID: this.$router.currentRoute.params.ID,
            dialogAddProducts: false,
            dialogSuccessPayment: false,
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

<style scoped>
    .sticky-block { position: sticky !important; top: 0; }
    .add-card { width: 400px; max-width: 100%; }
</style>