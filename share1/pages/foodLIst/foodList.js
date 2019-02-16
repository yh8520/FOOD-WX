// pages/foodLIst/foodList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodlist:[],
    pageIndex:0, //保存分页
    pageSize:7,  //保存页大小
    hasMore:true //是否有下一页数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getfoodList()
  },
  // 商品列表
  getfoodList: function () {
    if(this.data.hasMore==false)return;//判断是否有下一页数据，若没有则停止函数执行
    wx.showLoading({
      title: '数据加载中...',
    })
    var pno=this.data.pageIndex+1;
    var ps=this.data.pageSize;
    wx.request({
      url: 'http://127.0.0.1:3000/getfoodList',
      method: "get",
      data:{pno:pno,pageSize:ps},
      success: (res) => {
        // 收到数据
        setTimeout(function(){
          wx.hideLoading()
        },1500)
        var rows=this.data.foodlist.concat(res.data.data);
        var pc=res.data.pageCount;
        var flag=pno < pc;
        this.setData({
          foodlist:rows,
          pageIndex:pno,
          hasMore:flag
        })
        
      },
      fail: (res) => {
        console.log('fail' + res)
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
    this.setData({
      pageIndex:0,
      foodlist:[],
      hasMore:true //清楚原有的判断条件
    })
    this.getfoodList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getfoodList();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})