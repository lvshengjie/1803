// pages/wifi/wifi.js
const app = getApp(); //获取全局对象（APP对象）
Page({

    /**
     * 页面的初始数据
     */
    data: {
        "longitude": 0,
        "latitude": 0,
        "markers": [],
        "wifiUrl": app.globalData.wifiUrl,
        "wifiKey": app.globalData.wifiKey
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        wx.getLocation({

            success: function(res) {
                var mks = that.data.markers;

                mks.push({
                    "id": 0,
                    "longitude": res.longitude,
                    "latitude": res.latitude,
                    "iconPath": "/imgs/4.png",
                    "width": 40,
                    "height": 40

                });
                that.setData({
                    "longitude": res.longitude,
                    "latitude": res.latitude,
                    "markers": mks

                });

                wx.request({
                    url: that.data.wifiUrl,
                    method: "GET",
                    data: {
                        "lon": res.longitude,
                        "lat": res.latitude,
                        "gtype": 1,
                        "r": 1000,
                        "key": that.data.wifiKey
                    },
                    success: function(res) {
                        console.log("----------");
                        console.log(res);
                        var mks = that.data.markers;
                        if (null != res.data.result) {
                            for (var i = 0; i < res.data.result.data.length; i++) {
                                var item = res.data.result.data[i];
                                mks.push({
                                    "id": i + 1,
                                    "longitude": item.google_lon,
                                    "latitude": item.google_lat,
                                    "iconPath": "/imgs/wifi11.png",
                                    "width": 40,
                                    "height": 40
                                });
                            }
                            that.setData({
                                markers: mks
                            })
                        }
                    }
                })


            }
        })
    },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})