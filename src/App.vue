<script setup>
import { ref } from "vue";
import NotificationsList from "./components/Notification/NotificationList.vue";
import { toast } from "./components/Notification/Toastify.js";
import Cookie from "./components/Cookie/Cookie.vue";

// *********** Cookie Component ***********

const privacyPolicy = "When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer."

const cookieSettingsData  = [
	{
		title : "Cookie Ayarları",
		description : "Cookie ayarlarınızı buradan değiştirebilirsiniz.",
		isActive : false,
	},
	{
		title : "Cookie Ayarları",
		description : "Cookie ayarlarınızı buradan değiştirebilirsiniz.",
		isActive : true,
	},
	{
		title : "Cookie Ayarları",
		description : "Cookie ayarlarınızı buradan değiştirebilirsiniz.",
		isActive : false,
	},
]

const cookieData = ref({
		title: "We ask for your permission for a better experience.",
		description: "By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. ",
		rejectActive: true,
		cookieSettings : cookieSettingsData,
		privacyPolicy,
	});

// *********** Notification Component ***********

	const notifications = ref([]);

	const clickHandler = () => {
		notifications.value.push(toast("This is a test notification", {
		icon: "🤞",
		duration : 5000,
		background :"#f0f0f0",
		color : "#212121",
		barBackground : "orange",
	}));

};

</script>

<template>
	<div class="container">
		<button @click="clickHandler">Show Custom Notification</button>
	</div>
	<Cookie :cookieData="cookieData" ></Cookie>
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
