<script setup>
import { ref } from "vue";
import NotificationsList from "./components/NotificationList.vue";
import { toast } from "./components/Toastify.js";

const notifications = ref([]);

const clickHandler = () => {
	notifications.value = [
		...notifications.value,
		toast("This is a test notification", {
			position: "top-left",
			background: "#9D80B8",
			icon: "🤞",
		})
	];
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
