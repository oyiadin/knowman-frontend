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

  #form-container {
    width: 90%;
    max-width: 350px;
    margin: 5px auto;
  }
  .title {
    font-size: 2em;
    text-align: center;
    padding: 20px 0;
  }
  label {
    display: block;
    overflow: hidden;
    margin-bottom: 10px;
  }
  label span {
    display: inline-block;
    float: left;
    width: 30%;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding-right: 10px;
    text-align: right;
    color: #333;
  }
  input[type="text"]:hover {
    border-bottom: 1px solid #333;
  }
  input[type="text"] {
    display: inline-block;
    float: left;
    margin: 0;
    padding: 0;
    width: 70%;
    height: 30px;
    background: transparent;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid #ccc;
    transition: all ease .3s;
    outline: none;
  }
  .buttons {
    text-align: center;
    margin-top: 25px;
    cursor: default;
  }
  button:hover {
    color: white;
    background: black;
  }
  button {
    transition: all ease .3s;
    color: #333;
    background: transparent;
    border: 0;
    padding: 2px 5px;
  }
</style>
