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
  html, body {
    box-sizing: border-box;
    height: 100%;
    letter-spacing: 0.3px;
  }
  body {
    background: #eee;
    color: #333;
    margin: 0;
    padding: 0;
    font-size: .9em;
    padding-top: 45px;
  }
  #app, #main-view {
    height: 100%;
  }
</style>
