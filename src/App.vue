<script setup>
import { ref } from "vue";
import NotificationsList from "./components/NotificationList.vue";
import { toast } from "./components/Toastify.js";

const notifications = ref([]);

const successHandler = () => {
	notifications.value = [
		...notifications.value,
		toast().success("Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloğu olarak tanımlanır. Lipsum, oluşturulacak şablon ve taslaklarda içerik yerine geçerek yazı bloğunu doldurmak için kullanılır.", {
			position: "top-right",
			type: "success",
		}),
	];
};
const warningHandler = () => {
	notifications.value = [
		...notifications.value,
		toast().warning("deneme",{
			position:"top-left"
		}),
	];
};
const errorHandler = () => {
	notifications.value = [
		...notifications.value,
		toast().error(),
	];
};

const infoHandler = () => {
	notifications.value = [
		...notifications.value,
		toast().info(),
	];
};
</script>

<template>
	<div class="container">
		<button @click="successHandler">Success</button>
		<button @click="warningHandler">Warning</button>
		<button @click="errorHandler">Error</button>
		<button @click="infoHandler">Info</button>

	</div>
	<NotificationsList :notifications="notifications"></NotificationsList>
</template>

<style lang="scss" scoped>
.container {
	button {
		background-color: #212121;
		color: white;
		padding: 10px;
		border-radius: 5px;
		margin: 10px;
		border: none;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		&:hover {
			background-color: #424242;
		}
	}
}
</style>
