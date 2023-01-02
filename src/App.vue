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
#app {
    /* IE and Edge */
    -ms-overflow-style: none;
    /* Firefox */
    scrollbar-width: none;
}

#app::-webkit-scrollbar {
    /* Chrome, Safari, Opera */
    display: none;
}
</style>