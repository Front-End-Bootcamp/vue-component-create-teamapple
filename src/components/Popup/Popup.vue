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
