  
<template>
    <v-row id="site-footer" class="py-4" justify="end" align="center">
        <v-col cols="12" sm="6" class="pa-0 pl-0 pl-sm-3">
            <v-row justify="center" justify-sm="start">
                <v-icon color="white" large class="icon-contact" @click="openContact('https://github.com/Noejuro')">mdi-github</v-icon>
                <v-icon color="white" large class="icon-contact" @click="openContact('https://www.linkedin.com/in/noejuarez/')">mdi-linkedin</v-icon>
                <v-icon color="white" large class="icon-contact" @click="openContact('https://wa.me/5214494123140?text=¡Hola!')">mdi-whatsapp</v-icon>
            </v-row>
        </v-col>
        <v-col cols="12" sm="6" class="pa-0 pr-0 pr-sm-3" align-self="center">
            <v-row justify="center" justify-sm="end" class="author"> Noé Alejandro Juárez Romero </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    methods: {
        openContact(url) {
            window.open(url,'_blank');
        }
    }
}
</script>

<style scoped>
    #site-footer {
        background-color: #553D67;
        box-shadow: 0px 2px 10px #888888;
        transition: 1s;
        z-index: 1;
        min-height: 85px;
        position: relative;
    }
    .logo-footer { width: 50px; max-width: 50px; height: auto; max-height: 100%; cursor: pointer;}
    .author { color: white; font-weight: 700; }
    .icon-contact { cursor: pointer; }
</style>