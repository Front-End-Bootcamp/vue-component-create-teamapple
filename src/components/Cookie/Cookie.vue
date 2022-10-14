<script setup>
	import { ref ,computed, reactive} from "vue";
	import CookieSettings from "./CookieSettings.vue";

	const cookieActive = computed(  () => {
		return localStorage.getItem("cookie") === "false" ? false : true;
	})

	const showComp = reactive({
		cookie: cookieActive.value,
		settings: false
	})

	const acceptHandler = () => {
		showComp.cookie = false
		localStorage.setItem("cookie",JSON.stringify(false))
	};

	const declineHandler = () => {
		showComp.cookie = false
		localStorage.setItem("cookie",JSON.stringify(true))
	};

	const settingsHandler = () => {
		showComp.settings = true
		showComp.cookie= false
	};

</script>

<template>
	<div v-if="showComp.cookie" class="cookie">
		<div class="cookie--header">
			<h2>Cookies</h2>
		</div>
		<div class="cookie--body">
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi vitae voluptates atque ullam eius eos explicabo assumenda est nulla voluptas, dolorum omnis quaerat reprehenderit adipisci veritatis autem aspernatur id?</p>
		</div>
		<div class="cookie--footer">
			<button class="cookie--footer__button" @click="settingsHandler" >Settings</button>
			<button class="cookie--footer__button" @click="acceptHandler" >Accept</button>
			<button class="cookie--footer__button" @click="declineHandler">Reject</button>
		</div>
	</div>
	<CookieSettings v-if="showComp.settings" :isShow="showComp" ></CookieSettings>
</template>

<style lang="scss" scoped>

.cookie{
	width: 800px;
	height: 200px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #212121;
	border: 2px solid #121212;
	border-radius: 20px;
	position: fixed;
	bottom: 20px;
	right: 50%;
	transform: translateX(50%);
	transition: 0.8s ease-in-out;
	animation: cookie 0.8s ease-in-out;

	&--header{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
		h2{
			color: white;
			font-size: 20px;
			font-weight: 500;
		}
	}

	&--body{
		width: 100%;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		p{
			color: white;
			font-size: 14px;
			font-weight: 500;
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
		&__button{
			background-color: #121212;
			color: white;
			padding: 10px;
			border-radius: 5px;
			margin: 10px;
			border: none;
			cursor: pointer;
			font-size: 14px;
			font-weight: 500;
			&:hover {
				background-color: #424242;
			}
		}
	}
}

@keyframes cookie {
	0%{
		bottom: -200px;
	}
	100%{
		bottom: 20px;
	}
}

</style>