<template>
  <div v-if="notification.notifying" id="notification" :class="notification.level">
    <div class="title">{{ notification.title }}</div>
    <div class="content">{{ notification.content }}</div>
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
  .error {
    background: #eee;
    color: red;
  }
  .info {
    background: #eee;
    color: green;
  }
</style>
