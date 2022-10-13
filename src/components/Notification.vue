<script setup>
import { onMounted, ref } from "vue";

const barWidth = ref(100);
const isClose = ref(true);

const props = defineProps(["notification"]);
const emit = defineEmits(["update:id"]);

const position = props.notification.class.position;
const backgroundColor = props.notification.class.background;
const barBackground = props.notification.class.barBackground;

const closeHandler = () => {
	emit("update:id", props.notification.id);
	console.log(position)
};

const startTimer = (time) => {
		const timer = setInterval(() => {
				barWidth.value -= 1;
				if (barWidth.value === 0) {
						clearInterval(timer);
				}
		}, time / 100);
  }

onMounted(() => {
	setTimeout(() => {
		isClose.value = false;
	}, props.notification.duration);
	startTimer(props.notification.duration)
});

</script>

<template>
	<template v-if="isClose">
		<div class="notification--message" :class="position" :style="{backgroundColor : backgroundColor}" >
			<div class="notification--message__text">
				<span class="material-symbols-outlined">
					{{ props.notification.icon }}
				</span>
				{{ props.notification.description }}	
			</div>
			<button class="notification--message__close" @click="closeHandler">
				<span class="material-symbols-outlined"> close </span>
			</button>
			<div v-if="props.notification.barActive" class="notification--message__bar" :style="{ width: `${barWidth}%` , backgroundColor : barBackground}" ></div>
		</div>
	</template>
</template>

<style scoped lang="scss">
.notification--message__close {
	border: 0;
	background-color: transparent;
	color: #fafafa;
}
.notification--message {
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
	color: white;
	margin: 8px;
	padding: 12px 5px;
	min-width: 150px;
	max-width: 300px;
	width: auto;
	z-index: 99;
	font-family: Arial, Helvetica, sans-serif;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	&__text {
		font-size: 12px;
		font-weight: 500;
		display: flex;
		align-items: center;
		margin-right: 8px;
		span {
			margin: 0px 8px;
			font-size: 18px;
		}
	}
	&__close {
		cursor: pointer;
		display: flex;
		align-items: center;
		span {
			font-size: 18px;
			margin-left: 5px;
		}
	}
	&__bar{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
				// background-image: linear-gradient(to left, #fefefe, #e2deee, #c9bfdd, #b29fcb, #9d80b8);
        border-radius: 0px 0px 5px 5px;
    }
}
</style>
