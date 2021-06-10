<template>
    <v-dialog v-model="dialog" persistent max-width="500">
        <v-card color="green">
            <v-col class="py-6 px-4">
                <v-row justify="center"> <v-icon color="white" style="font-size: 100px">mdi-checkbox-marked-circle</v-icon> </v-row>
                <v-row justify="center" class="success-message text-center"> <h1> Your payment has been confirmed! </h1> </v-row>
            </v-col>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: { dialog: Boolean },
    watch: {
        dialog(){
            var that = this;
            if(this.dialog)
                setTimeout(function(){ that.$router.push({ path: '/orders' }) }, 3000);
        }
    }
}
</script>

<style scoped>
    .success-message { color: white; font-weight: 600; }
</style>