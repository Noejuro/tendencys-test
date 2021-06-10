<template>
    <v-row id="orders-list">
        <v-col>
            <v-row v-for="(order, index) in orders" :key="index" @click="goToOrderDetails(order.number)" class="order-container my-2">
                <v-col>
                    <v-row justify="center"> Orden: {{order.name}}</v-row>
                </v-col>
            </v-row>
        </v-col>
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
    .order-container { cursor: pointer; border: 1px solid #EEE; box-shadow: 0 3px 3px #CCC; }
</style>