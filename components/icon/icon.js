// components/icon/icon.js
Component({
  /**
   * 外部样式类
   */
  externalClasses:["qs-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      type: String,
      value: "setting",
    },
    custom: {
      type: String,
      value: "",
    },
    size: {
      type:String,
      optionalTypes:[Number],
      value: "32",
    },
    color: {
      type: String,
      value: "#333",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    optionHandle(){
      const {size} = this.data;
      if(!isNaN(size)){
        this.setData({size:size+"rpx"})
      }
    },
  },
});
