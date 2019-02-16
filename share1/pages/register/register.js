// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  CheckFrom:function(e){
    var uname = e.detail.value.uname;
    var phone = e.detail.value.phone;
    var upwd = e.detail.value.upwd;
    var upwd1 = e.detail.value.upwd1;
    wx.request({
      url: 'http://127.0.0.1:3000/register',
      data:{uname:uname,phone:phone,upwd:upwd},
      success:(res)=>{
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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