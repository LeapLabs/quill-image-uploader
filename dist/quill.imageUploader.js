var e = function(e, i) {
  ;(this.quill = e),
    (this.options = i),
    (this.range = null),
    'function' != typeof this.options.upload &&
      console.warn(
        '[Missing config] upload function that returns a promise is required'
      ),
    this.quill
      .getModule('toolbar')
      .addHandler('image', this.selectLocalImage.bind(this))
}
;(e.prototype.selectLocalImage = function() {
  var e = this
  ;(this.range = this.quill.getSelection()),
    (this.fileHolder = document.createElement('input')),
    this.fileHolder.setAttribute('type', 'file'),
    this.fileHolder.setAttribute('accept', 'image/*'),
    this.fileHolder.setAttribute('style', 'visibility:hidden'),
    (this.fileHolder.onchange = this.fileChanged.bind(this)),
    document.body.appendChild(this.fileHolder),
    this.fileHolder.click(),
    window.requestAnimationFrame(function() {
      document.body.removeChild(e.fileHolder)
    })
}),
  (e.prototype.fileChanged = function() {
    var e = this,
      i = this.fileHolder.files[0],
      t = new FileReader()
    i && t.readAsDataURL(i),
      this.options.upload(i).then(
        function(i) {
          e.insertToEditor(i)
        },
        function(e) {
          console.warn(e.message)
        }
      )
  }),
  (e.prototype.insertBase64Image = function(e) {
    this.quill.insertEmbed(this.range.index, 'image', '' + e, 'user')
  }),
  (e.prototype.insertToEditor = function(e) {
    var i = this.range
    this.quill.insertEmbed(i.index, 'image', '' + e, 'user'),
      i.index++,
      this.quill.setSelection(i, 'api')
  }),
  (module.exports = e)
//# sourceMappingURL=quill.imageUploader.js.map
