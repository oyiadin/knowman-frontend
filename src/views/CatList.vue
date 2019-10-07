<template>
  <div class="items-container">
    <div class="path-info">Now we are at <span class="hightlight">{{ pwd }}</span></div>
    <div class="toolbar">
      <span class="left">
        <router-link :to="`new`">+ New Category Here</router-link>
      </span>
      <span class="right">
        <a @click="newdoc">New Document Here +</a>
      </span>
    </div>
    <span v-for="item in subcats" :key="'cat-'+item.path">
      <router-link :to="'/cat/'+item.path" item-type="cat">{{ item.title }}</router-link>
    </span>
    <span v-for="item in docs" :key="'cat-'+item.path">
      <router-link :to="'/doc/'+item.path" item-type="doc">{{ item.title }}</router-link>
    </span>
  </div>
</template>

<script>
import api from '@/api'
import utils from '@/utils'

export default {
  name: 'CatList',
  data () {
    return {
      pwd: null,
      subcats: [],
      docs: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      api.cat.fetchChildren(this.$route.params.path, {
        success: (_, res) => {
          this.subcats = res.subcats
          this.docs = res.docs
          this.pwd = '/'
          for (let parent of res.parents) {
            this.pwd += '/' + parent.path
          }
        },
        categoryNotFound: (_, res, next) => {
          this.$router.push('/')
          next(_, res)
        }
      })
    },
    newdoc () {
      api.doc.newDoc(this.$route.params.path, (err, res) => {
        if (!err) {
          this.$router.push(`/doc/${res.newDoc.path}`)
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
    color: grey;
    text-shadow: 0 0 5px white;
    display: inline !important;
  }
  .toolbar {
    overflow: hidden;
  }
  .left, .right {
    width: 50%;
    display: block;
    float: left;
    cursor: pointer;
  }
  .left {
    text-align: right;
  }
  span:hover {
    background: black;
  }
  span {
    transition: all ease .3s;
    display: block;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
  }
  span a:hover {
    color: white;
    text-shadow: 0 0 5px white;
  }
  span a[item-type="cat"]:hover:after {
    content: " <<";
  }
  span a[item-type="doc"]:hover:before {
    content: ">> ";
  }
  span a {
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
  span a[item-type="cat"] {
    text-align: left;
  }
  span a[item-type="doc"] {
    text-align: right;
  }
</style>
