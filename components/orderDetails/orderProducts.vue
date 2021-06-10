<template>
    <v-row id="order-products">
        <v-col class="pa-0">
            <v-row v-for="(product, index) in products" :key="index">
                <v-col cols="3" align-self="center">
                    <v-row justify="center">
                        <img :src="( product.imageUrl ) ? product.imageUrl : 'https://www.haedosrl.com.ar/images/frontend/notfound.png' " alt="Product" class="img-product">
                    </v-row>
                </v-col>
                <v-col>
                    <v-row> <h2> {{product.name}} </h2> </v-row>
                    <v-row> <p> {{product.sku}} </p> </v-row>
                    <v-row> <p> <b>Cantidad: </b> {{product.quantity}} </p> </v-row>
                </v-col>
                <v-col cols="2">
                    <v-row justify="center"> <h2> <b> {{product.price}} </b> </h2> </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: { products: Array },
    }
</script>

<style scoped>
    .img-product { width: 100%; max-width: 110px; height: 100%; max-height: 100% }
</style>