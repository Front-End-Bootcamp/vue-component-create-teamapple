<script setup>
import { ref } from "vue";
import NotificationsList from "./components/Notification/NotificationList.vue";
import { toast } from "./components/Notification/Toastify.js";

const notifications = ref([]);

const clickHandler = () => {
	// notifications.value = [
	// 	...notifications.value,
	// 	toast("This is a test notification", {
	// 		position: "top-left",
	// 		background: "#9D80B8",
	// 		icon: "🤞",
	// 		duration : 5000,
	// 	}),
	// 	toast().info("This is a test notification", {
	// 		position: "top-left",
	// 		icon: "👍",
	// 		background : "indigo",
	// 		duration : 5000,
	// 	}),
	// 	toast().error()
	// ];
	notifications.value.push(toast("This is a test notification", {
		icon: "🤞",
		duration : 5000,
		theme: "light",
		barBackground : "orange",
	}));
};
</script>

<template>
	<div class="container">
		<button @click="clickHandler">Show Notification</button>
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
