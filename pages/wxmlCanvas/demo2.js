const wxml = (schoolName,className) =>{
   return `
<view>
    <image src="https://static.imzhiliao.com/enterclass-bg.jpg" class="bgImage" alt=""></image>
    <view class="container">
        <view class="custom-wrapper">
            <view class="schoolInfo">
                <text class="schoolName">`+ schoolName +`</text>
                <text class="schoolName">  ` + className +`</text>
            </view>
            <view class="qrcode">
                <image class="qrcode-image" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3582589792,4046843010&fm=26&gp=0.jpg" alt=""></image>
            </view>
        </view>
    </view>
</view>
`
}

const style = {

    container: {
        width: 343,
        height: 500,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    bgImage: {
        width: 343,
        height: 500,
        position: 'relative'
    },

    customWrapper: {
        position: 'absolute',
        top: 219,
        left: 0,
        right: 0,
        flexDirection: 'column',
        alignItems: 'center'
    },

    schoolInfo: {
        height: 64,
        textAlign: 'center',
        padding: 14,
        color: '#fff',
        fontSize: 14,
        borderRadius: 32,
        backgroundColor: '#bff16b'
    },

    schoolName: {
        width: 232,
        height: 20,
        verticalAlign: 'middle',

    },

    qrcode: {
        marginTop: 29,
        width: 120,
        height: 120,
        backgroundColor: '#fff'
    },
    canvas: {
        width: 120,
        height: 120,
    },

    qrcodeImage: {
        width: 104,
        height: 104,
        margin: 8
    }
}

module.exports = {
    wxml,
    style
}
