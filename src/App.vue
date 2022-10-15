<script setup>
import {reactive, ref } from "vue";
import NotificationsList from "./components/Notification/NotificationList.vue";
import { toast } from "./components/Notification/Toastify.js";
import Cookie from "./components/Cookie/Cookie.vue";

const notifications = ref([]);

const cookieData = reactive({
		title: "Daha iyi bir deneyim için izninizi istiyoruz.",
		cookieName: "Cookie Name",
		description: "Daha iyi bir deneyim için izninizi istiyoruz.Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak, içerikleri ve reklamları kişiselleştirmek, sosyal medya özellikleri sunmak ve site trafiğimizi analiz etmek için kullanıyoruz. Aynı zamanda site kullanımınızla ilgili bilgileri; sosyal medya, reklamcılık ve analiz ortaklarımızla paylaşıyoruz.",
		rejectActive: false,
});

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
	<NotificationsList :notifications="notifications"></NotificationsList>
	<Cookie :cookieData="cookieData" ></Cookie>
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
