<template>
    <v-dialog v-model="dialog" persistent max-width="700">
        <v-card color="green">
            <v-col class="py-6">
                <v-row> <p> ¡Tu pago ha sido exitoso! </p> </v-row>
            </v-col>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: { dialog: Boolean },
}
</script>

<style scoped>
    
</style>