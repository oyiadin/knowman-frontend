<template>
  <div id="form-container">
    <div class="title">New Category</div>
    <form>
      <label>
        <span>Title</span>
        <input type="text" name="title" v-model="title" required>
      </label>
      <div class="buttons">
        <button @click="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import utils from '../utils'
import api from '../api'

export default {
  data: function () {
    return {
      title: ''
    }
  },
  methods: {
    submit (e) {
      if (!this.title) {
        utils.notify({
          content: 'Please fill in all of the required items',
          level: 'error'
        })
      } else {
        e.preventDefault()
        let data = {
          title: this.title
        }
        api.cat.newCat(this.$route.params.url, data, (err, result) => {
          if (!err && result) {
            this.$router.push(`/cat/${this.url}`)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
label span {
  width: 15%;
}
label input[type="text"] {
  width: 85%;
}
</style>
