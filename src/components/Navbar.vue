<template>
  <div id="navbar">
    <span class="left">
      <router-link to="/">Home</router-link>
    </span>
    <span class="right">
      <template v-if="this.$store.state.user.loggedIn">
        <span>{{ this.$store.state.user.username }}</span>
        <a @click="logout" href="/#">Logout</a>
      </template>
      <template v-else>
        <span>
          <router-link to="/auth">Login / Register</router-link>
        </span>
      </template>
    </span>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    logout () {
      api.auth.logout((err, result) => {
        if (!err && result) {
          if (this.$router.currentRoute.path !== '/') {
            this.$router.push('/')
          }
          this.$store.commit('user/updateInfo')
        }
      })
    }
  }
}
</script>
