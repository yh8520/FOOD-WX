// pages/00exem00/00.js
const app=getApp()
Page({
  handleTap1:function(){
    console.log("有冒泡的tap事件");
  },
  handleTap2:function(){
    console.log("没有冒泡的tap事件")
  },
  handleTap3: function (e) {
    console.log("父元素的tap事件");
    console.log("事件类型："+e.type);
    console.log(e.currentTarget);
    console.log("触发事件元素");
    console.log(e.target);
  },
  handleTap4: function (e){
    console.log(e.target.dataset.id)
    console.log(e)
  },

  del: function (e) {
    wx.showModal({
      title: "提示",
      content: "是否删除"+e.target.dataset.name,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '数据已经删除',
            duration: 1500
          })
          setTimeout(function () {
            wx.hideToast();
          }, 1500)
        } else {
          console.log(res)
        }
      },
    })
  },

  caozuo:function(){
    wx.showActionSheet({
      itemList:["删除操作","添加操作"],
      success:(res)=>{
        var idx=res.tapIndex
        if(idx==0){
          wx.navigateTo({
            url: '/pages/share/share',
          })
        }else{
          wx.navigateTo({
            url: '/pages/share/share',
          })
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.loginName="jerry";
    
    // wx.showToast({
    //   title:"操作成功", //提示信息
    //   icon:"success", //显示图标
    //   duration:1500,  //延迟时间
    // });
    // setTimeout(function(){
    //   wx.hideToast();
    // }, 1500)  //将提示组件卸载

    // wx.showModal({
    //   title:"提示",
    //   content:"这是一个模态对话框",
    //   success:(res)=>{
    //     console.log(res)
    //   }
    // })

    // wx.showActionSheet({
    //   itemList: ["点赞","踏踏","踩踩","忽略"],
    //   success:(res)=>{
    //     var idx=res.tapIndex;
    //     console.log(idx)
    //   }
    // })
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