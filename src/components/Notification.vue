<template>
  <div v-if="notification.notifying" id="notification" :class="notification.level">
    <div class="inner">{{ notification.content }}</div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data () {
    return {}
  },
  computed: {
    notification () {
      return this.$store.state.notification
    }
  }
}
</script>

<style scoped>
  #notification {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    color: white;
    opacity: 0.8;
  }
  .inner {
    height: 50px;
    line-height: 50px;
    min-width: 100px;
    padding: 0 10px;
    margin: 0 auto;
    text-align: center;
  }
  .error {
    background: red;
    box-shadow: 0 0 8px red;
  }
  .info {
    background: green;
    box-shadow: 0 0 8px green;
  }
</style>
