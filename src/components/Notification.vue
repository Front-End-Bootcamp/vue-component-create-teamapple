<script setup>
import { onMounted, ref } from "vue";

const props = defineProps(["notification"]);
const emit = defineEmits(["update:id"]);

const customClass = Object.values(props.notification.class);
const isClose = ref(true);

const closeHandler = () => {
	emit("update:id", props.notification.id);
};

onMounted(() => {
	setTimeout(() => {
		isClose.value = false;
	}, 10000);
});
</script>

<template>
	<template v-if="isClose">
		<div class="notification--message" :class="customClass">
			<div class="notification--message__text">
				<span class="material-symbols-outlined">
					{{ props.notification.icon }}
				</span>
				{{ props.notification.description }}
			</div>
			<button class="notification--message__close" @click="closeHandler">
				<span class="material-symbols-outlined"> close </span>
			</button>
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
}
</style>
