// pages/movies/movies.js
let MOVIE_URL = 'https://douban.uieee.com/v2/movie/top250';
let appDatas = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    movies: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: MOVIE_URL,
      header: {
        "content-type": "json"
      },
      success: (response) => {
        console.log(response)
        this.setData({
          movies: response.data.subjects
        })
        // 更新app数据
        appDatas.data.movies = response.data.subjects;
      }
    });
  },
})