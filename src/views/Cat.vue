<template>
  <div class="container">
    <div class="path-info">Now we are at <span class="hightlight">{{ pwd }}</span></div>
    <div class="items-container">
      <div class="toolbar">
        <span class="left">
          <router-link :to="`/newcat/${this.$route.params.url}`">+ New Category Here</router-link>
        </span>
        <span class="right">
          <a @click="newdoc">New Document Here +</a>
        </span>
      </div>
      <span v-for="item in subcats" :key="'cat-'+item.url">
        <router-link :to="'/cat/'+item.url" item-type="cat">{{ item.title }}</router-link>
      </span>
      <span v-for="item in docs" :key="'cat-'+item.url">
        <router-link :to="'/doc/'+item.url" item-type="doc">{{ item.title }}</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import api from '../api'
import utils from '../utils'

export default {
  name: 'Index',
  data () {
    return {
      pwd: '/Linux/Bootsec',
      subcats: [],
      docs: []
    }
  },
  created () {
    api.cat.fetchSubcats(this.$route.params.url, (err, res) => {
      if (!err) {
        this.subcats = res.subcats
        api.cat.fetchDocs(this.$route.params.url, (_, res) => {
          if (!err) {
            this.docs = res.docs
          }
        })
      }
    })
  },
  methods: {
    newdoc () {
      api.doc.newDoc(this.$route.params.url, (err, res) => {
        if (!err) {
          this.$router.push(`/doc/${res.newDoc.url}`)
          utils.notify({
            content: 'New Document Created',
            level: 'success'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .path-info {
    margin: 0 auto;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: black;
    box-shadow: 0 0 8px black;
    color: #333;
  }
  .hightlight {
    color: white;
    text-shadow: 0 0 5px white;
  }
  .toolbar {
    overflow: hidden;
  }
  .items-container .left, .items-container .right {
    width: 50%;
    display: block;
    float: left;
    cursor: pointer;
  }
  .items-container .left {
    text-align: right;
  }
  .items-container span:hover {
    background: black;
  }
  .items-container span {
    transition: all ease .3s;
    display: block;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
  }
  .items-container span a:hover {
    color: white;
    text-shadow: 0 0 5px white;
  }
  .items-container span a[item-type="cat"]:hover:after {
    content: " <<";
  }
  .items-container span a[item-type="doc"]:hover:before {
    content: ">> ";
  }
  .items-container span a {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px;
    line-height: 60px;
    height: 60px;
    color: #333;
    text-decoration: none;
    max-width: 500px;
    margin: 0 auto;
  }
  .items-container span a[item-type="cat"] {
    text-align: left;
  }
  .items-container span a[item-type="doc"] {
    text-align: right;
  }
</style>
