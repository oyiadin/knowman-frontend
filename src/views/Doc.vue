<template>
  <div class="container">
    <div class="toolbar">
      Welcome to {{ title }}! This is Toolbar
    </div>
    <div class="document">
      <textarea
        v-model="content"
        id="document-left"
        @scroll="scroll('left', $event)"
        @click="updateSelection('click', $event)"
        @focus="updateSelection('focus', $event)"
        @keyup="updateSelection('keyup', $event)"
        @change="updateSelection('change', $event)"
        @input="contentChangedByUser($event)">
        <!-- We have to listen both `onchange` and `oninput` to make it works on mobile phones. -->
      </textarea>
      <div
        id="document-right"
        @scroll="scroll('right', $event)">
        <span v-html="renderedHTML"></span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api'
let md = require('markdown-it')()

export default {
  name: 'Doc',
  data () {
    return {
      title: '',
      content: '',
      renderedHTML: '',
      inputing: false,
      selectionStart: 0,
      selectionEnd: 0,
      ws: null
    }
  },
  created () {
    api.doc.fetchInfo(this.$route.params.url, (err, res) => {
      if (!err) {
        this.title = res.doc.title
        this.content = res.doc.content
        this.ws = new WebSocket(`ws://${location.host}/ws/doc/${this.$route.params.url}`)
        this.ws.json = (obj) => {
          this.ws.send(JSON.stringify(obj))
        }
        this.ws.onopen = (e) => {
          console.log('WebSocket connected')
          this.ws.json({ action: 'test' })
        }
        this.ws.onmessage = (e) => {
          let payload = JSON.parse(e.data)
          console.log(payload)
          if (payload.action === 'update') {
            this.inputing = false
            this.content = payload.content
          }
        }
      } else {
        this.$router.push('/auth')
      }
    })
  },
  watch: {
    content: function (newContent, oldContent) {
      if (this.inputing) {
        this.ws.json({ action: 'update', content: newContent })
      }
      console.log('watch: content changed, re-rendering..')
      this.renderedHTML = md.render(newContent)
    }
  },
  updated () {
    console.log('updated')
    let el = document.getElementById('document-left')
    console.log(this.selectionStart, this.selectionEnd)
    el.setSelectionRange(this.selectionStart, this.selectionEnd)
  },
  methods: {
    scroll (from, event) {
      let target = (
        from === 'left'
          ? document.getElementById('document-right')
          : document.getElementById('document-left'))
      target.scrollTop = event.target.scrollTop
    },
    contentChangedByUser (e) {
      console.log('contentChangedByUser')
      this.inputing = true
      this.updateSelection('input', e)
    },
    updateSelection (a, e) {
      console.log(`update selection: ${a}`)
      console.log(e)
      let el = document.getElementById('document-left')
      this.selectionStart = el.selectionStart
      this.selectionEnd = el.selectionEnd
      console.log(this.selectionStart, this.selectionEnd)
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
  #document-left, #document-right {
    background: transparent;
    color: #333;
    height: 100%;
    font-size: 1.1em;
    overflow: scroll;
    display: inline-block;
    box-sizing: border-box;
    width: 50%;
    padding: 5px 20px;
  }
  #document-left {
    float: left;
    border: 0;
    border-right: 1px solid #ccc;
    outline: none;
    resize: none;
  }
  #document-right {
    float: right;
    word-break: break-word;
    color: black;
    text-shadow: 0 0 1px #ccc;
  }
  img {
    width: 100% !important;
  }
</style>
