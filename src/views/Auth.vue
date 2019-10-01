<template>
  <div id="form-container">
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
