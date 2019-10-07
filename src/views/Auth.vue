<template>
  <div>
    <div id="form-container">
      <div class="title">Authentication</div>
      <form>
        <label>
          <span>Username</span>
          <input type="text" name="username" v-model="username" required autofocus>
        </label>
        <label>
          <span>Password</span>
          <input type="text" name="password" v-model="password" required>
        </label>
        <popup title="Password Confirm" @close="closePopup" v-if="isShowing">
          <input id="passwordConfirm" class="full-width" required
                 type="text" name="passwordConfirm" v-model="passwordConfirm">
          <div class="buttons">
            <button @click="doRegister">Register</button>
          </div>
        </popup>
        <div class="buttons">
          <button @click="doLogin">Login</button>
          <button @click="showPopup">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import utils from '@/utils'
import sha256 from 'js-sha256'
import Popup from './comps/Popup'

export default {
  data: function () {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      isShowing: false
    }
  },
  components: { Popup },
  methods: {
    showPopup (e) {
      if (!this.username || !this.password) {
        utils.notify({
          content: 'Please fill in all of the required items',
          level: 'error'
        })
      } else {
        e.preventDefault()
        this.passwordConfirm = ''
        this.isShowing = true
        this.$nextTick(() => {
          document.getElementById('passwordConfirm').focus()
        })
      }
    },
    closePopup (e) {
      this.isShowing = false
      this.passwordConfirm = ''
    },
    doLogin (e) {
      if (!this.username || !this.password) {
        utils.notify({
          content: 'Please fill in all of the required items',
          level: 'error'
        })
      } else {
        e.preventDefault()
        api.cred.login({
          username: this.username,
          hashedPassword: sha256(this.password)
        }, {
          success: (_, res) => {
            this.$store.dispatch('cred/updateUserStatus')
            this.$router.push('/')
          },
          invalidCredential: (_, res, next) => {
            this.password = ''
            this.passwordConfirm = ''
            next(_, res)
          }
        })
      }
    },
    doRegister (e) {
      if (!this.username || !this.password || !this.passwordConfirm) {
        utils.notify({
          content: 'Please fill in all of the required items',
          level: 'error'
        })
      } else if (this.password !== this.passwordConfirm) {
        this.passwordConfirm = ''
        utils.notify({
          content: 'Unmatched password.',
          level: 'error'
        })
      } else {
        e.preventDefault()
        api.cred.register({
          username: this.username,
          hashedPassword: sha256(this.password)
        }, {
          success: (_, res) => {
            // this.username = ''
            this.password = ''
            this.passwordConfirm = ''
            this.closePopup()
            utils.notify({
              content: 'Registered. Please login.',
              level: 'info'
            })
          },
          userConflict: (_, res, next) => {
            this.username = ''
            this.password = ''
            this.passwordConfirm = ''
            next(_, res)
          }
        })
      }
    }
  }
}
</script>
