<template>
    <v-row id="order-details">
        <v-col class="pa-0">
            <v-row> Orden: {{orderDetails.name}} </v-row>
            <v-row v-if="this.orderDetails.items"> Subtotal ({{orderDetails.items.length}} productos): {{getSubTotal}} </v-row>
            <v-row> <v-btn color="success" @click="$emit('openSuccessPaymentDialog')" block>Terminar Pago</v-btn> </v-row>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: { orderDetails: Object },
        data() {
            return {
                formatter: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0
                })
            }
        },
        computed: {
            getSubTotal() {

                var subTotal = 0;
                if(this.orderDetails.items)
                    for(var product = 0; product < this.orderDetails.items.length; product++ )
                        subTotal += parseFloat(this.orderDetails.items[product].price);

                return this.formatter.format(subTotal);
            }
        }
    }
</script>

<style scoped>

</style>