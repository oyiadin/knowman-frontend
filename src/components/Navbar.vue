<template>
  <div id="navbar">
    <span class="left">
      <router-link to="/">Home</router-link>
    </span>
    <span class="right">
      <template v-if="this.$store.state.user.loggedIn">
        <span>{{ this.$store.state.user.username }}</span>
        <span @click="logout">Logout</span>
      </template>
      <template v-else>
        <span>
          <router-link to="/login">Login</router-link>
        </span>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  },
  methods: {
    logout () {
      console.log('logout')
    }
  }
}
</script>
