export default {
  update (ws, content, callbacks) {
    ws.json({
      action: 'update',
      content: content
    })
  }
}
