<script setup >

  const props = defineProps(["notification"])
  console.log(props.notification)

  const customClass = Object.values(props.notification.class)
  console.log(customClass)

</script>

<template>
    <div class="notification--message" :class="customClass"    >
        <div class="notification--message__text">
            <span class="material-symbols-outlined">
                {{props.notification.icon}}
            </span>
            {{props.notification.description}}
        </div>
        <div class="notification--message__close">
            <span class="material-symbols-outlined">
                close
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.notification--message{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    color: white;
    margin: 8px;
    padding: 8px 5px;
    min-width: 150px;
    width: auto;
    z-index: 99;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    &__text{
        font-size: 12px;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-right: 8px;
        span{
            margin:0px 8px;
            font-size: 18px;
        }
    }
    &__close{
        cursor: pointer;
        display: flex;
        align-items: center;
        span{
            font-size: 18px;
            margin-left: 5px;
        }
    }
}

</style>
