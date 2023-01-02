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
    <v-card :height="extended ? '100vh' : 56" :rounded="0" image="@/assets/images/appheader.jpg" :elevation="1" class="app-header">
        <!-- <div class="img-container">
            <img src="@/assets/images/appheader.jpg" />
        </div> -->

        <app-header-bar @close="click" />



    </v-card>
</template>

<style scoped>
.app-header {
    position: fixed;
    width: 100vw;

    z-index: 1;

    transition: height 1s cubic-bezier(0.75, 0, 0.25, 1);
}

.img-container {
    text-align: center;
    position: absolute;

    top: 0;
    right: -200%;
    bottom: 0;
    left: -200%;
}

.img-container>img {
    opacity: 0.5;
}
</style>