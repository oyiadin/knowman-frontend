export default {
  update (ws, content, callback) {
    ws.json({
      action: 'update',
      content: content
    })
  }
}
