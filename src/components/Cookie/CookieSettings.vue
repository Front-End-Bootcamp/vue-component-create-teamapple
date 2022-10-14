<script setup>
import { ref, toRefs } from 'vue';
import ToogleButton from './ToogleButton.vue';

const props = defineProps(['isShow']);

const {cookie} = toRefs(props.isShow)
const {settings} = toRefs(props.isShow)

const closeHandler = () => {
	cookie.value = true;
	settings.value = false;
};


</script>

<template>
	
	<div class="settings">
		<div class="settings--header">
			<div class="settings--header__title">
				<span class="material-symbols-outlined">
				tune
				</span>
				<h2>Cookie Settings</h2>
			</div>
			<div class="settins--header__icon" @click="closeHandler">
				<span class="material-symbols-outlined">
				close
			</span>
			</div>
		</div>
		<div class="settings--content">
			<div class="settings--content__item">
				<div>
					<h3 class="title">Cookie Name</h3>
					<p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div>
					<ToogleButton></ToogleButton>
				</div>
			</div>
		</div>
		<div class="settings--footer">
			<button class="settings--footer--button">Save</button>
		</div>
	</div>

</template>


<style lang="scss" scoped>

	.settings{
		width: 40%;
		height: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: #212121;
		border: 2px solid #121212;
		border-radius: 20px;
		padding: 10px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: 0.8s ease-in-out;

		&--header{
			width: 100%;
			height: 50px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-top-left-radius: 20px;
			border-top-right-radius: 20px;

			&__title{
				display: flex;
				align-items: center;
				&>h2{
					color: white;
					font-size: 20px;
					font-weight: 500;
				}
			}

			.material-symbols-outlined{
				color: white;
				font-size: 28px;
				margin-right: 10px;
				cursor: pointer;
			}

		}

		&--content{
			width: 100%;
			height: 90%;
			display: flex;
			flex-direction: column;
			&__item{
				width: 100%;
				border: 2px solid #121212;
				margin: 10px 0px;
				padding: 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-radius: 10px;
				.title{
					color: white;
					font-size: 16px;
					font-weight: 500;
					margin-bottom: 5px;
				}
				.description{
					color: white;
					font-size: 14px;
					font-weight: 500;
				}
			}
		}

		&--footer{
			width: 100%;
			height: 50px;
			display: flex;
			justify-content : center;
			align-items: center;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
			&--button{
				background-color: #121212;
				border: 2px solid #121212;
				border-radius: 20px;
				color: white;
				font-size: 14px;
				font-weight: 500;
				padding: 10px 20px;
				cursor: pointer;
				&:hover{
					background-color: #212121;
					border: 2px solid #121212;
					color: white;
				}
			}
		}

	}


</style>