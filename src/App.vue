<script setup>
import AppHeader from "@/components/app/AppHeader.vue";
</script>

<template>
    <v-app id="app">
        <app-header />
        <router-view />
    </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hahmlet:wght@300;400&display=swap');


#app {
    /* IE and Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;

    font-family: "Hahmlet";
}

#app::-webkit-scrollbar {
    /* Chrome, Safari, Opera */
    display: none;
}
</style>