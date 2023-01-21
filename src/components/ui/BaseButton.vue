<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false
    },
    to: {
      type: String,
      required: false,
      default: '/'
    }
  }
}
</script>

<!-- <style scoped>
button,
a {
  /* bottom: 0; */
  display: flex;
  /* position: absolute; */
  z-index: 10;
  top: 50%;
  right: 3%;
  background-color: #2a2e35;
  font: inherit;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40x;
  margin-top: 10px;
  justify-content: center;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #270041;
  color: #270041;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #edd2ff;
}
</style> -->