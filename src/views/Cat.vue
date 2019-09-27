<template>
  <div class="container">
    <span v-for="item in items" :key="item.title">
      <template v-if="item.type === 'cat'">
        <router-link :to="'/cat/'+item.url" :item-type="item.type">{{ item.title }}</router-link>
      </template>
      <template v-else>
        <router-link :to="'/doc/'+item.url" :item-type="item.type">{{ item.title }}</router-link>
      </template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      items: [
        {
          type: 'cat',
          url: 'cat1',
          title: 'Category-1'
        },
        {
          type: 'cat',
          url: 'cat2',
          title: 'Category-2'
        },
        {
          type: 'doc',
          title: 'Document-1',
          url: 'doc1'
        }
      ]
    }
  }
}
</script>

<style scoped>
  span:hover {
    background: black;
    color: white;
  }
  span {
    transition: all ease .3s;
    display: block;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
  }
  span a:hover {
    color: #ccc;
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
    color: black;
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
