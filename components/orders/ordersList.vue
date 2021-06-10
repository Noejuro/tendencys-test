<template>
    <v-row id="orders-list">
        <v-card class="orders-list-container">
            <v-col>
                <v-row> <h2> Select an order to continue </h2> </v-row>
                <v-row v-for="(order, index) in orders" :key="index" @click="goToOrderDetails(order.number)" class="order-container my-4">
                    <v-col>
                        <v-row justify="center"> <p class="mb-0"> <b> {{order.name}} </b> </p> </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-card>
    </v-row>
</template>

<script>
    export default {
        props: { orders: Array },
        methods: {
            goToOrderDetails(orderNumber) {
                this.$router.push({ path: 'orders/' + orderNumber, query: this.$route.query })
            }
        }
    }
</script>

<style scoped>
    #orders-list { max-width: 500px; margin: 0 auto !important; }
    .orders-list-container { width: 100%; height: fit-content;}
    .order-container { cursor: pointer; border: 1px solid #EEE; box-shadow: 0 3px 3px #CCC; transition: 0.2s; }
    .order-container:hover { background-color: #553D67; color: white; transition: 0.2s; }
</style>