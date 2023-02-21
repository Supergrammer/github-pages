<script setup>
import { ref } from "vue";

const menuItems = ref([
	{ icon: "fas fa-blog", title: "블로그", link: "/blog" },
	{ icon: "fas fa-file-invoice", title: "개인 이력", link: "/resume" },
]);
</script>

<template>
	<v-list nav active-color="primary" class="py-3">
		<v-list-item
			v-for="(item, index) in menuItems"
			:key="index"
			:to="item.link"
			:prepend-icon="item.icon"
			class="px-5 rounded-lg"
		>
			<span v-text="item.title" class="font-weight-bold" />
		</v-list-item>
	</v-list>
</template>

<style scoped></style>
