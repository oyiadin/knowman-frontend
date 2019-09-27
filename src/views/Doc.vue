<template>
  <div class="container">
    <div class="toolbar">
      This is Toolbar
    </div>
    <div class="document">
      <textarea v-model="content" class="left"></textarea>
      <textarea v-model="content" class="right"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doc',
  data () {
    return {
      content: ''
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
    box-sizing: border-box;
    padding-top: 35px;
  }
  .toolbar {
    height: 25px;
    line-height: 25px;
    font-size: .8em;
    background: black;
    box-shadow: 0 0 8px black;
    padding: 0 20px;
    text-align: center;
    position: fixed;
    top: 45px;
    left: 0;
    right: 0;
  }
  .document {
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
  }
  .document textarea {
    background: transparent;
    color: #333;
    outline: none;
    resize: none;
    height: 100%;
    font-size: 1.1em;
  }
  .left {
    display: inline-block;
    float: left;
    border: 0;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    width: 50%;
    padding: 5px 20px;
  }
  .right {
    display: inline-block;
    float: right;
    border: 0;
    box-sizing: border-box;
    width: 50%;
    padding: 5px 20px;
  }
</style>
