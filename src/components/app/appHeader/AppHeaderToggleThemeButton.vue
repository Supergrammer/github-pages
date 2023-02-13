<script setup>
import { computed, ref } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const currentTheme = ref(theme.global.name);

const themeSwitch = computed({
	get: () => currentTheme.value === "dark",
	set: value => (currentTheme.value = value ? "dark" : "light"),
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
