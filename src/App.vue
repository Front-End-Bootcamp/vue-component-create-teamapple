<script setup>
import { ref } from "vue";
import NotificationsList from "./components/NotificationList.vue";
import { toast } from "./components/Toastify.js";

const notifications = ref([]);

const showMe = () => {
	notifications.value = [
		...notifications.value,
		toast().success("Success Notification", {
			position: "top-right",
			type: "warning",
		}),
	];

	// console.log(notifications.value);
};

const closeHandler = (e) => {
	// notifications.value[0].show = false;
	// console.log(e.target);
};
</script>

<template>
	<div class="container">
		<button @click="showMe">Show Me !</button>
		<!-- <button @click="closeHandler">close</button> -->
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
