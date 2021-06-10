<template>
    <v-row id="order-products">
        <v-card class="order-products-card">
            <v-col class="py-0">
                <v-row class="pt-4 pl-4 pb-2"> <h2> Your products </h2> </v-row>
                <v-row v-for="(product, index) in products" :key="index" class="border-bottom">
                    <v-col cols="4" md="2" align-self="center">
                        <v-row justify="center">
                            <img :src="( product.imageUrl ) ? product.imageUrl : 'https://www.haedosrl.com.ar/images/frontend/notfound.png' " alt="Product" class="img-product">
                        </v-row>
                    </v-col>
                    <v-col>
                        <v-row> <h2> {{product.name}} </h2> </v-row>
                        <v-row> <p> {{product.sku}} </p> </v-row>
                        <v-row class="d-md-none"> <p class="mb-0"> <b> {{formatter.format(product.price)}} </b> </p> </v-row>
                        <v-row> <p> <b>Cantidad: </b> {{product.quantity}} </p> </v-row>
                    </v-col>
                    <v-col cols="2" class="d-none d-md-block">
                        <v-row justify="center"> <h2> {{formatter.format(product.price)}} </h2> </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-card>
    </v-row>
</template>

<script>
    export default {
        props: { products: Array },
        data() {
            return {
                formatter: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                })
            }
        },
    }
</script>

<style scoped>
    .order-products-card { width: 100%; }
    .img-product { width: auto; max-width: 110px; height: 100%; max-height: 100px }
    .border-bottom { border-bottom: 1px solid #EEE }
</style>