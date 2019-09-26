<template>
  <div id="navbar">
    <span class="left">
      <router-link to="/" class="block">Home</router-link>
    </span>
    <span class="right">
      <template v-if="this.$store.state.user.loggedIn">
        <span class="block">{{ this.$store.state.user.username }}</span>
        <span @click="logout">
          <router-link to="/" class="block">Logout</router-link>
        </span>
      </template>
      <template v-else>
        <router-link to="/auth" class="block">Login / Register</router-link>
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
          if (this.$router.currentRoute.path !== '/auth') {
            this.$router.push('/auth')
          }
          this.$store.commit('user/updateInfo')
        }
      })
    }
  }
}
</script>

<style scoped>
  #navbar {
    box-shadow: 0 0 8px black;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: .9em;
    background: black;
    cursor: default;
  }
  .block:hover {
    color: #aaa;
  }
  .block {
    color: white;
    display: inline-block;
    transition: color .3s;
    text-decoration: none;
    padding: 0 10px;
  }
  .left {
    display: inline-block;
    float: left;
  }
  .right {
    display: inline-block;
    float: right;
  }
  .left .block:first-child {
    padding-left: 0;
  }
  .right .block:last-child {
    padding-right: 0;
  }

</style>
