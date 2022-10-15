<script setup>
import {ref } from "vue";
import NotificationsList from "./components/Notification/NotificationList.vue";
import { toast } from "./components/Notification/Toastify.js";

const notifications = ref([]);

const clickHandler = () => {

	notifications.value.push(toast("This is a test notification", {
		icon: "🤞",
		duration : 5000,
		theme: "dark",
		barBackground : "orange",
	}));

};


</script>

<template>
	<div class="container">
		<button @click="clickHandler">Show Notification</button>
	</div>
	<Teleport to="#notification">
		<NotificationsList :notifications="notifications"></NotificationsList>
	</Teleport>
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
