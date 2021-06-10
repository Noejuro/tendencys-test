<template>
    <v-row id="order-details">
        Orden: {{orderDetails.name}}
    </v-row>
</template>

<script>
    export default {
        props: { orderDetails: Object }
    }
</script>

<style scoped>

</style>