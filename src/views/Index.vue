<template>
  <div class="container">
    At Index
    <br>
    <router-link to="doc">Go to Doc</router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .container {
    padding: 5px 20px;
  }
</style>
