<script setup >
import Notification from "./Notification.vue"
const props = defineProps(["notifications"])

</script>

<template>
  <div class="notifications" :class="props.notifications[0]?.class.position" >
    <template v-for="notification in props.notifications">
      <Notification v-if="notification.show" :notification="notification" ></Notification>
    </template>
  </div>
</template>

<style scoped lang="scss">
    .notifications{
        position: fixed;
        margin: 8px;
    }

</style>
