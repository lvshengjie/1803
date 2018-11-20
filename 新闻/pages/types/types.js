
// pages/types/types.js
Page({
    //展示信息详细信息
    showDetail:function(e){
        var url=e.currentTarget.id;
        wx.navigateTo({
            url: '/pages/detail/detail?url='+ url
        })
        
    },
  //点击了新闻类型
  selectType:function(e){
      var that=this;
    var id=e.target.id;
    //Console.log(id);
    this.setData({
      currentType:id
    });
    
      
      //按新闻类型，去新闻数据
    wx.request({
        
        url: 'https://v.juhe.cn/toutiao/index',
        data:{type:id,
            key:'63264061a005b7000cbb88e19835f67b'},
            method:'GET',
            header:{
                'content-type':'application/json'//数据值
            },
            success:function(res){
                console.log(res);
                that.setData({
                    newsList:res.data.result.data
                })

            }
    })
    

  },

  /**
   * 页面的初始数据
   */
  data: {
    currentType:'top',
    newsList:[],
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      //按新闻类型，去新闻数据
      wx.request({

          url: 'https://v.juhe.cn/toutiao/index',
          data: {
              type: 'top',
              key: '63264061a005b7000cbb88e19835f67b'
          },
          method: 'GET',
          header:{
              'content-type': 'application/json'//数据值
          },
          success: function (res) {
              console.log(res);
              that.setData({
                  newsList: res.data.result.data
              })

          }
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})