// pages/list/list.js
let datas = require('../../datas/list-data');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [],
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({datas: datas.list_data});
  },

  toDetail(event) {
    let id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  },

  carouselToDetail(event) {
    let id = event.target.dataset.detailid;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id
    })
  }
})