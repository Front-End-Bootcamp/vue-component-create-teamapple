<script setup >
import { ref } from "vue";
import NotificationsList from "./components/NotificationList.vue"
import {toast} from "./components/Toastify.js"

const notifications = ref([])

const showMe = () => {
  // notifications.value = [...notifications.value, toast("hello",{
  //   position : "top-right",

  // })]
  notifications.value = [...notifications.value, toast().success("Hello Team Apple", {
    position : "top-left",
    type : "warning"
  })]
  console.log(notifications.value)
}

</script>

<template>  
  <div class="container">
    <button @click="showMe" >Show Me !</button>
  </div>
  <NotificationsList :notifications="notifications" ></NotificationsList>
</template>

<style lang="scss" scoped>

.container{
  button{
    background-color: #212121;
    color: white;
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    &:hover{
      background-color: #424242;
    }
  }
}
</style>
