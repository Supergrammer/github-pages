<script setup>
import { computed, inject } from "vue";

const theme = inject("theme");

const themeSwitch = computed({
	get: () => theme.value === "dark",
	set: () => (theme.value = theme.value === "dark" ? "light" : "dark"),
});
</script>

<template>
	<div>
		<v-switch
			v-model="themeSwitch"
			inset
			hide-details
			true-icon="far fa-moon"
			false-icon="fas fa-moon"
			color="yellow"
		/>
	</div>
</template>

<style scoped></style>
