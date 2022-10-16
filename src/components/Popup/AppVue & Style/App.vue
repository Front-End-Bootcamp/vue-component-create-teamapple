<script setup>
import Popup from "./components/Popup/Popup.vue";
import { reactive, ref } from "vue";

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
</script>

<template>
  <div class="btnGroups">
    <button class="showButton" @click="isImageOpen">Show Image Popup</button>
    <button class="showButton" @click="isVideoOpen">Show Video Popup</button>
    <button class="showButton" @click="isTextOpen">Show Text Popup</button>
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
</template>
