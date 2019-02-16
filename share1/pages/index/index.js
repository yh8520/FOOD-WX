//index.js
//获取应用实例
const app = getApp()
Page({

  handleTap: function () {
    wx.navigateTo({
      url: '/pages/foodLIst/foodList'
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    list:[],    //轮播图
    routers:[], //九宫格
    food: []    //美食推荐
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取轮播图信息
    this.getImage()
    // 获取九宫格信息
    this.getNavImages()
    this.getFood()
  },
  // 获取九宫格信息
  getNavImages:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/getJiu',
      method: "get",
      success: (res) => {
        this.setData({
          routers: res.data
        })
      },
      fail: (res) => {
        console.log('fail' + res)
      }
    })
  },
// 获取轮播图信息
  getImage:function(){
    var url = "http://127.0.0.1:3000/getImages";
    wx.request({
      url: url,
      method: "get",
      success: (res) => {
        this.setData({ list: res.data })
      },
      fail: (res) => {
        console.log("fail:" + res)
      }
    });
  },
  // 获取美食推荐信息
  getFood: function () {
    var url = "http://127.0.0.1:3000/food";
    wx.request({
      url: url,
      method: "get",
      success: (res) => {
        this.setData({ food: res.data })
      },
      fail: (res) => {
        console.log("fail:" + res)
      }
    });
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