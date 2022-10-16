<script setup>
const props = defineProps(["type", "text", "color"]);
</script>

<template>
  <button
    class="popup__close"
    :type="props.type"
    :style="{ backgroundColor: props.color }"
  >
    {{ props.text.toUpperCase() }}
  </button>
</template>
