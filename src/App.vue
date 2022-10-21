<script setup>
import { reactive, ref } from "vue";
import NotificationsList from "./components/Notification/NotificationList.vue";
import { toast } from "./components/Notification/Toastify.js";
import Cookie from "./components/Cookie/Cookie.vue";
import Popup from "./components/Popup/Popup.vue";

// *********** Popup Component ***********

const isShowImagePopup = ref(false);
const isShowVideoPopup = ref(false);
const isShowTextPopup = ref(false);

const features = reactive({
	title: "Image Popup",
	isVideo: false,
	isImage: true,
	isText: false,
	buttonType: "button",
	buttonText: "kapat",
	buttonColor: "red",
	description: "src/assets/text-1.txt",
	imageSource: "src/assets/image-2.jpg",
	videoSource: "src/assets/video-1.mp4",
});
const customFeatures_1 = reactive({
	title: "Video Popup",
	isVideo: true,
	isImage: false,
	isText: false,
	buttonType: "button",
	buttonText: "kapat",
	buttonColor: "orange",
	description: "src/assets/text-1.txt",
	imageSource: "src/assets/image-2.jpg",
	videoSource: "src/assets/video-1.mp4",
});
const customFeatures_2 = reactive({
	title: "Text Popup",
	isVideo: false,
	isImage: false,
	isText: true,
	buttonType: "button",
	buttonText: "onayla",
	buttonColor: "green",
	description: "src/assets/text-1.txt",
	imageSource: "src/assets/image-2.jpg",
	videoSource: "src/assets/video-1.mp4",
});

function readTextFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
				customFeatures_2.description = allText;
			}
		}
	};
	rawFile.send(null);
}
readTextFile("src/assets/text-1.txt");

function isImageOpen() {
	isShowImagePopup.value = true;
}
function isVideoOpen() {
	isShowVideoPopup.value = true;
}
function isTextOpen() {
	isShowTextPopup.value = true;
}
// *********** Cookie Component ***********

const privacyPolicy =
	"When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.";

const cookieSettingsData = [
	{
		title: "Cookie Ayarları",
		description: "Cookie ayarlarınızı buradan değiştirebilirsiniz.",
		isActive: false,
	},
	{
		title: "Cookie Ayarları",
		description: "Cookie ayarlarınızı buradan değiştirebilirsiniz.",
		isActive: true,
	},
	{
		title: "Cookie Ayarları",
		description: "Cookie ayarlarınızı buradan değiştirebilirsiniz.",
		isActive: false,
	},
];

const cookieData = ref({
	title: "We ask for your permission for a better experience.",
	description:
		"By clicking “Accept All Cookies”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. ",
	rejectActive: true,
	cookieSettings: cookieSettingsData,
	privacyPolicy,
});

// *********** Notification Component ***********

const notifications = ref([]);

const clickHandler = () => {
	notifications.value.push(
		toast("This is a test notification", {
			icon: "🤞",
			duration: 5000,
			background: "#f0f0f0",
			color: "#212121",
			barBackground: "orange",
		})
	);
};

const successHandler = () => {
	notifications.value.push(
		toast().success())
};

const errorHandler = () => {
	notifications.value.push(
		toast().error())
};

const warningHandler = () => {
	notifications.value.push(
		toast().warning())
};
</script>

<template>
	<Cookie :cookieData="cookieData"></Cookie>
	<div class="btnGroups">
		<button class="showButton" @click="isImageOpen">Show Image Popup</button>
		<button class="showButton" @click="isVideoOpen">Show Video Popup</button>
		<button class="showButton" @click="isTextOpen">Show Text Popup</button>
		<button class="showButton" @click="clickHandler">
			Show Custom Notification
		</button>
		<button class="showButton" @click="successHandler">
			Show Success Notification
		</button>		<button class="showButton" @click="errorHandler">
			Show Error Notification
		</button>		<button class="showButton" @click="warningHandler">
			Show Warning Notification
		</button>
	</div>

	<template v-if="isShowImagePopup">
		<Teleport to="#popup">
			<Popup
				v-model:isShowPopup="isShowImagePopup"
				:features="features"
			></Popup>
		</Teleport>
	</template>

	<template v-if="isShowVideoPopup">
		<Teleport to="#popup">
			<Popup
				v-model:isShowPopup="isShowVideoPopup"
				:features="customFeatures_1"
			></Popup>
		</Teleport>
	</template>

	<template v-if="isShowTextPopup">
		<Teleport to="#popup">
			<Popup
				v-model:isShowPopup="isShowTextPopup"
				:features="customFeatures_2"
			></Popup>
		</Teleport>
	</template>

	<Teleport to="#notification">
		<NotificationsList :notifications="notifications"></NotificationsList>
	</Teleport>
</template>

<style lang="scss" scoped>
.btnGroups {
	position: absolute;
	top: 10px;
	left: 10px;

}
.showButton {
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #1a1a1a;
	margin: 5px;
	cursor: pointer;
	transition: border-color 0.25s;

	&:hover {
		border-color: #646cff;
	}
	&:focus,
	&:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}
}
</style>
