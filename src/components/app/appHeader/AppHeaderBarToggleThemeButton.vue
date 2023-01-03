<script setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const isDark = ref(false);

const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";

watch(theme.global.name, (value) => isDark.value = value === "dark");
</script>
<template>
    <v-btn icon flat @click="toggleTheme">
        <v-icon :icon="`far ${isDark ? 'fa-sun' : 'fa-moon'}`" />
    </v-btn>
</template>

<style scoped>

</style>