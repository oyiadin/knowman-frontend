<template>
  <div id="auth-container">
    <form>
      <label>
        Username:
        <input type="text" name="username" v-model="username" required>
      </label>
      <label>
        Password:
        <input type="text" name="password" v-model="password" required>
      </label>
      <button @click="submit('login', $event)">Login</button>
      <button @click="submit('register', $event)">Register</button>
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
