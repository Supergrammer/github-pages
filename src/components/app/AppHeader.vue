<script setup>
import { ref } from "vue";

import AppHeaderBar from "@/components/app/appHeader/AppHeaderBar.vue"

const extended = ref(true);

const click = function () {
    extended.value = false;
    console.log(extended)
}
</script>

<template>
    <v-card :height="extended ? '100vh' : 56" :rounded="0" class="app-header">
        <app-header-bar @close="click" />
        <div class="img-container">
            <img src="@/assets/images/appheader.jpg" />
        </div>




    </v-card>
</template>

<style scoped>
.app-header {
    position: fixed;
    width: 100vw;

    transition: height 1s cubic-bezier(0.75, 0, 0.25, 1);
    z-index: 1;
}

.img-container {
    text-align: center;

    margin-left: -100%;
    margin-right: -100%;
}

.img-container>img {
    opacity: 0.5;
    
}
</style>