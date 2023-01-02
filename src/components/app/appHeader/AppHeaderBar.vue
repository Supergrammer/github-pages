<script setup>

</script>

<template>
    <div class="pa-1 d-flex align-center">
        <v-btn icon flat>
            <v-icon icon="fas fa-bars" />
        </v-btn>

        <v-spacer />
        <div @click="$emit('close')">
            <span v-text="'개발자 BLOG'" style="font-size: 25px;" />
        </div>
        <v-spacer />

        <v-btn icon flat>
            <v-icon icon="fas fa-magnifying-glass" />
        </v-btn>

        <v-btn icon flat>
            <v-icon icon="fas fa-ellipsis-vertical" />
        </v-btn>
    </div>
</template>

<style scoped>

</style>