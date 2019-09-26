<template>
  <div id="app">
    <navbar />
    <notification />
    <div id="main-view">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Notification from './components/Notification'

export default {
  name: 'App',
  components: {
    Navbar,
    Notification
  }
}
</script>

<style>
  body {
    background: #eee;
    color: #333;
    margin: 0;
    padding: 0;
    font-size: .9em;
  }
  #main-view {
    padding: 5px 20px;
  }
</style>
