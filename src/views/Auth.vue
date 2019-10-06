<template>
  <div>
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
        <popup title="Password Confirm"
               @close="showPopup = false"
               v-if="showPopup">
          <input class="full-width"
                 type="text" name="passwordConfirm" v-model="passwordConfirm" required>
          <div class="buttons">
            <button @click="submit('register', $event)">Register</button>
          </div>
        </popup>
        <div class="buttons">
          <button @click="submit('login', $event)">Login</button>
          <button @click="checkRequired(() => { showPopup = true })">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../api'
import utils from '../utils'
import sha256 from 'js-sha256'
import Popup from './comps/Popup'

export default {
  data: function () {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      showPopup: false
    }
  },
  components: { Popup },
  methods: {
    checkRequired (successCallback) {
      if (!this.username || !this.password) {
        utils.notify({
          content: 'Please fill in all of the required items',
          level: 'error'
        })
      } else {
        successCallback()
      }
    },
    submit (action, e) {
      let handler = action === 'login' ? api.cred.login : api.cred.register

      this.checkRequired(() => {
        if (action === 'register' && this.password !== this.passwordConfirm) {
          utils.notify({
            content: 'Your passwords are different, please check again.',
            level: 'warn'
          })
          this.passwordConfirm = ''
        } else {
          e.preventDefault()
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
      })
    }
  }
}
</script>
