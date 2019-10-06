<template>
  <div v-if="$store.state.notify.notifying" id="notify" :class="$store.state.notify.level">
    <div class="inner">{{ $store.state.notify.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Notify',
  data () {
    return {}
  }
}
</script>

<style scoped>
  #notify {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    color: white;
    opacity: 0.8;
    z-index: 1000;
  }
  .inner {
    height: 45px;
    line-height: 45px;
    min-width: 100px;
    padding: 0 10px;
    margin: 0 auto;
    text-align: center;
  }
  .error {
    background: red;
    box-shadow: 0 0 8px red;
  }
  .info, .success {
    background: green;
    box-shadow: 0 0 8px green;
  }
  .warn {
    background: orange;
    box-shadow: 0 0 8px orange;
  }
</style>
