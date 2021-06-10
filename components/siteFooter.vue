  
<template>
    <v-row id="site-footer" class="py-4" justify="end">
        <v-col class="pa-0" cols="4">
            <v-row justify="center">
                <img @click="$router.push({ path: '/' })" src="https://cdn.glitch.com/c9340de0-d9c1-4c8a-988c-2836b8426a55%2FImagen1.png?v=1621648108779" class="logo-footer" alt="logo">
            </v-row>
        </v-col>
        <v-col class="pa-0 pr-3" cols="4" align-self="center">
            <v-row justify="end" class="author"> Noé Alejandro Juárez Romero </v-row>
        </v-col>
    </v-row>
</template>

<style scoped>
    #site-footer {
        background-color: #553D67;
        box-shadow: 0px 2px 10px #888888;
        transition: 1s;
        z-index: 1;
        height: 85px;
        position: relative;
    }
    .logo-footer { width: 50px; max-width: 50px; height: auto; max-height: 100%; cursor: pointer;}
    .author { color: white; font-weight: 700; }
</style>