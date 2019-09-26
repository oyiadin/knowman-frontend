<template>
  <div id="auth-container">
    <div class="title">Authentication</div>
    <form>
      <label>
        <span>Username</span>
        <input type="text" name="username" v-model="username" required>
      </label>
      <label>
        <span>Password</span>
        <input type="text" name="password" v-model="password" required>
      </label>
      <div class="buttons">
        <button @click="submit('login', $event)">Login</button>
        <button @click="submit('register', $event)">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import api from '../api'
import utils from '../utils'
import sha256 from 'js-sha256'

export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit (action, e) {
      e.preventDefault()
      let handler = action === 'login' ? api.auth.login : api.auth.register

      if (!this.username || !this.password) {
        utils.notify({
          title: 'Authentication Error',
          content: 'Please fill in all of the required items',
          level: 'error'
        })
      } else {
        console.log({
          username: this.username,
          hashedPassword: sha256(this.password)
        })
        handler({
          username: this.username,
          hashedPassword: sha256(this.password)
        }, (err, result) => {
          if (!err && result) {
            this.$store.commit('user/updateInfo')
            if (action === 'login') {
              this.$router.push('/')
            }
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  #auth-container {
    width: 90%;
    max-width: 350px;
    margin: 0 auto;
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
