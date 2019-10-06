<template>
  <div class="popup-outer-container">
    <div class="popup-mask" @click="$emit('close')"></div>
    <div class="popup-inner-container">
      <div class="popup-title">{{ title }}</div>
      <div class="popup-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: [ 'title' ],
  data () {
    return {}
  }
}
</script>

<style scoped>
.popup-outer-container {
  z-index: 100;
}
.popup-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(240, 240, 240, 0.6);
}
.popup-inner-container {
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 90%;
  max-height: 200px;
  width: 90%;
  max-width: 300px;
  margin: auto;
  background: grey;
  color: white;
  border-radius: 15px;
  box-shadow: 0 0 50px grey;
  padding: 15px 30px;
  text-align: center;
}
.popup-title {
  line-height: 50px;
}
</style>
