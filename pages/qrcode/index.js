// pages/index/index.js
var QRCode = require('./weapp-qrcode.js')
var qrcode;


Page({
    data: {
        text: 'https://github.com/tomfriwel/weapp-qrcode',
        image: ''
    },
    onLoad: function (options) {
        qrcode = new QRCode('canvas1', {
            // usingIn: this,
            text: "https://github.com/tomfriwel/weapp-qrcode",
            // image:'./bg.jpg',
            width: 150,
            height: 150,
            colorDark: "#1CA4FC",
            colorLight: "white",
            correctLevel: QRCode.CorrectLevel.H,
        });
    },
    confirmHandler: function (e) {
        var value = e.detail.value
        qrcode.makeCode(value)
    },
    inputHandler: function (e) {
        var value = e.detail.value
        this.setData({
            text: value
        })
    },
    tapHandler: function () {
        // 传入字符串生成qrcode
        qrcode.makeCode(this.data.text)
    },
    // 长按保存
    save: function () {
        console.log('save')
        wx.showActionSheet({
            itemList: ['保存图片'],
            success: function (res) {
                console.log(res.tapIndex)
                if (res.tapIndex == 0) {
                    qrcode.exportImage(function (path) {
                        console.log('path',path)
                        wx.saveImageToPhotosAlbum({
                            filePath: path,
                        })
                    })
                }
            }
        })
    }
})