// components/grid/grid.js
Component({
  externalClasses:["qs-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    size:{
      type:String,
      optionalTypes:[Number],
      value:""
    },
    row:{
      type:String,
      optionalTypes:[Number],
      value:3
    },
    col:{
      type:String,
      optionalTypes:[Number],
      value:0
    },
    gap:{
      type:String,
      optionalTypes:[Number],
      value:"0"
    },
  },
  options: {
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    attached(){
      this.optionHandle();
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    optionHandle(){
      const {size,gap} = this.data;
      if(size&&!isNaN(size)){
        this.setData({size:size+"rpx"})
      }
      if(!isNaN(gap)){
        this.setData({gap:gap+"rpx"})
      }
    },
  }
})
