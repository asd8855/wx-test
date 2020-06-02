const { wxml, style } = require('./demo2.js')
// https://github.com/yingye/weapp-qrcode


Page({
  data: {
    src: '',
    className: '三年级五班',
    schoolName: '李波测试学校'
  },
  onLoad() {
    this.widget = this.selectComponent('.widget')
    setTimeout(() => {
      this.renderToCanvas();
    }, 300)
  },
  renderToCanvas() {
    const _wxml = wxml(this.data.schoolName,this.data.className)
    const p1 = this.widget.renderToCanvas({ wxml:_wxml, style })

    p1.then((res) => {
      console.log('container', res.layoutBox)
      this.container = res
    })
  },
  extraImage() {
    const p2 = this.widget.canvasToTempFilePath()
    p2.then(res => {
      console.log('res ==> ', res);
      this.setData({
        src: res.tempFilePath,
        width: this.container.layoutBox.width,
        height: this.container.layoutBox.height
      })
    })
  }
})
