<script setup>
import PopupButton from "./PopupButton.vue";
import { reactive } from "vue";

const props = defineProps(["features"]);
const emit = defineEmits(["update:isShowPopup"]);

const popupFeatures = reactive({
	title: props.features.title,
	isVideo: props.features.isVideo,
	isImage: props.features.isImage,
	isText: props.features.isText,
	description: props.features.description,
	imageSource: props.features.imageSource,
	videoSource: props.features.videoSource,
});

const buttonFeatures = reactive({
	buttonType: props.features.buttonType,
	buttonText: props.features.buttonText,
	buttonColor: props.features.buttonColor,
});

function isOpen() {
	emit("update:isShowPopup", false);
}
</script>

<template>
	<div class="popup">
		<h1 class="popup__title">{{ popupFeatures.title }}</h1>
		<hr />

		<div class="popup__media" v-if="popupFeatures.isVideo">
			<video width="650" height="450" controls>
				<source :src="popupFeatures.videoSource" type="video/mp4" />
			</video>
		</div>

		<div class="popup__media" v-if="popupFeatures.isImage">
			<img :src="popupFeatures.imageSource" alt="popup-image" />
		</div>

		<div class="popup__media" v-if="popupFeatures.isText">
			<p class="popup__description">{{ popupFeatures.description }}</p>
		</div>

		<PopupButton
			@click="isOpen"
			:type="buttonFeatures.buttonType"
			:text="buttonFeatures.buttonText"
			:color="buttonFeatures.buttonColor"
		></PopupButton>
	</div>
</template>

<style scoped lang="scss">
.popup {
	border-radius: 5px;
	border: 2px solid #808080;
	background-color: #fafafac5;
	color: #242424;

	&__title {
		text-align: center;
	}

	&__media {
		display: flex;
		align-items: center;
		place-items: center;
		margin: 0.6rem 1.2rem;
		img {
			border-radius: 0.3rem;
			filter: drop-shadow(15px 12px 8px rgba(0, 0, 0, 0.25));
			object-fit: contain;
			height: 650px;
		}
	}

	&__close {
		display: flex;
		justify-content: space-between;
		border-radius: 4px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		cursor: pointer;
		color: #fafafad2;
		margin: auto 1.2rem 0.6rem auto;

		&:hover {
			opacity: 0.7;
		}
		&:focus,
		&:focus-visible {
			outline: none;
		}
	}

	&__open {
		display: flex;
		justify-content: space-between;
		border-radius: 4px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		cursor: pointer;
		background-color: #3bb856;
		color: #fafafad2;
		margin: auto 0 0 auto;
		&:hover {
			background-color: #74f568;
		}
		&:focus,
		&:focus-visible {
			outline: none;
		}
	}

	&__description {
		width: 650px;
		height: 650px;
		overflow-y: auto;
	}
}
</style>
