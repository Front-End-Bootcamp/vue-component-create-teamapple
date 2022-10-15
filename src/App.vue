<script setup>
import {ref } from "vue";
import NotificationsList from "./components/Notification/NotificationList.vue";
import { toast } from "./components/Notification/Toastify.js";

const notifications = ref([]);

const customHandler = () => {

	notifications.value.push(toast("This is a custom notification", {
		icon: "🤞",
		duration : 5000,
		background :"#f0f0f0",
		color : "#212121",
		barBackground : "orange",
	}));

};

const successHandler = () => {
	notifications.value.push(toast().success())
}


</script>

<template>
	<div class="container">
		<button @click="customHandler">Show Custom Notification</button>
		<button @click="successHandler">Show Success Notification</button>
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
