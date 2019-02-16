// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:1
  },
  // 登录切换
  menuClick: function (e) {
    this.setData({
      num: e.target.dataset.num
    })
  },

  checkForm: function (e) {
      var phone = e.detail.value.phone;
      var upwd = e.detail.value.upwd;
      var id=e.currentTarget.dataset.id
      var data={ phone: phone, upwd: upwd }
      if(e.currentTarget.dataset.id==2){
        var uname = e.detail.value.uname;
        data={uname:uname,upwd:upwd,id:id}
      }
      console.log(data)
      wx.request({
      url: 'http://127.0.0.1:3000/login',
      method: "get",
      data: data,
      success: (res) => {
        console.log(res)
        if (res.data.code == 1) {
          wx.showToast({
            icon: "none",
            title: res.data.msg,
          })
        } else {
          wx.showToast({
            icon: "none",
            title: res.data.msg,
          })
        };

        wx.setTabBarItem({
          index: 3,
          "pagePath": "pages/main/main",
        })
      },
      fail: (res) => {
        console.log("fail" + res)
      }
    })
    },

  UserReg:function(){
    wx.navigateTo({
      url: '/pages/register/register',
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