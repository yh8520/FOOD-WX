// pages/share/share.js
Page({
  data: {
    list:[],
    pageIndex:0,
    pageSize:2,
    hasMore:true
  },
  // 查看详情
  handlePro:function(){
    wx.navigateTo({
      url: '/pages/Pro/Pro',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
  },
  loadMore:function(){
    var pno=this.data.pageIndex+1;
    var ps=this.data.pageSize
    wx.request({
      url: 'http://127.0.0.1:3000/Found',
      method:"get",
      data:{pno:pno,pageSize:ps},
      success:(res)=>{
     var rows=this.data.list.concat(res.data.data)
     var flag=pno<res.data.pageCount
        this.setData({
          list:rows,
          pageIndex:pno,  
          hasMore:flag
        })
      },
      fail:(res)=>{
        console.log("fail"+res)
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
    this.loadMore()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})