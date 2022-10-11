<script setup>
import { ref } from "vue";
import NotificationsList from "./components/NotificationList.vue";
import { toast } from "./components/Toastify.js";

const notifications = ref([]);

const showMeSuccess = () => {
	notifications.value = [
		...notifications.value,
		toast().success("Success Notification", {
			position: "top-right",
			type: "success",
		}),
	];
};
const showMeWarning = () => {
	notifications.value = [
		...notifications.value,
		toast().warning("Success Notification", {
			position: "top-right",
			type: "warning",
		}),
	];
};
const showMeError = () => {
	notifications.value = [
		...notifications.value,
		toast().error("Success Notification", {
			position: "top-right",
			type: "error",
		}),
	];
};
</script>

<template>
	<div class="container">
		<button @click="showMeSuccess">success</button>
		<button @click="showMeWarning">warning</button>
		<button @click="showMeError">error</button>
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
