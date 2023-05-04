// components/navigation-bar/navigation-bar.js
Component({
  /**
   * 外部样式类
   */
  externalClasses:["qs-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    //页面标题
    pageName: {
      type: String,
      value: "",
    },
    //标题文字大小
    size: {
      type: Number,
      optionalTypes: [String],
      value: "32",
    },
    //是否补白
    placeholder: {
      type: Boolean,
      value: true,
    },
    //是否自动返回
    autoBack: {
      type: Boolean,
      value: true,
    },
    //是否隐藏返回按钮，此属性为true时，autoBack 不生效
    notBack: {
      type: Boolean,
      value: false,
    },
    //背景颜色
    background:{
      type: String,
      value: "transparent",
    },
    color:{type: String,
      value: "#333",}
  },

  /**
   * 组件的初始数据
   */
  data: {},
  /**
   * 组件生命周期
   */
  lifetimes: {
    attached() {
      const { size, notBack } = this.data;
      console.log(size, notBack);
      this.getHeadHeight();
      if (!(size.includes("rpx") || size.includes("px")))
        this.setData({ size: size + "rpx" });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 获取头部导航高度
     */
    getHeadHeight() {
      const statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
      const res = wx.getMenuButtonBoundingClientRect();
      this.setData({
        headHeight: statusBarHeight + res.height + 10,
        MenuButtonInfo: res,
      });
    },
    backcs() {
      const { autoBack } = this.data;
      if (autoBack) {
        console.log("返回 ",autoBack);
        wx.navigateBack();
      } else {
        console.log("手动返回");
        this.triggerEvent("click");
      }
    },
  },
});
