<template>
    <v-row id="order-details">
        <v-col class="pa-0">
            <v-row> Order: {{orderDetails.name}} </v-row>
            <v-row v-if="this.orderDetails.items"> Subtotal ({{getProductsQuantity}} products): {{getSubTotal}} </v-row>
            <v-row> <v-btn color="success" @click="$emit('openSuccessPaymentDialog')" block>Finish Payment</v-btn> </v-row>
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
                        subTotal += parseFloat(this.orderDetails.items[product].price) * parseInt(this.orderDetails.items[product].quantity);

                return this.formatter.format(subTotal);
            },
            getProductsQuantity() {
                var quantity = 0;
                if(this.orderDetails.items)
                    for(var product = 0; product < this.orderDetails.items.length; product++ )
                        quantity += parseInt(this.orderDetails.items[product].quantity);

                return quantity;
            }
        }
    }
</script>

<style scoped>

</style>