<template>
    <v-row id="site-header" align="center" class="py-4 pl-10">
        <img @click="$router.push({ path: '/orders' })" src="https://cdn.glitch.com/c9340de0-d9c1-4c8a-988c-2836b8426a55%2FImagen1.png?v=1621648108779" class="logo-header" alt="logo">
    </v-row>
</template>

<style scoped>
    #site-header {
        background-color: #2F2FA2;
        box-shadow: 0px 2px 10px #888888;
        transition: 1s;
        z-index: 1;
        height: 85px;
        position: relative;
    }
    .logo-header { width: 50px; max-width: 50px; height: auto; max-height: 100%; cursor: pointer;}
</style>