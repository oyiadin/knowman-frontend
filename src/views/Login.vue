<template>
  <div id="login-container">
    <form @submit="submit">
      <label>
        Username:
        <input type="text" name="username" v-model="username">
      </label>
      <label>
        Password:
        <input type="text" name="password" v-model="password">
      </label>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import api from '../api'
import sha256 from 'js-sha256'

export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submit (e) {
      e.preventDefault()

      api.auth.login({
        username: this.username,
        hashedPassword: sha256(this.password)
      }, (err, result) => {
        if (!err && result) {
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
