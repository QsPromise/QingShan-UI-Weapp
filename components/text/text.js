// components/text/text.js
Component({
  /**
   * 外部样式类
   */
  externalClasses: ["qs-class"],
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: "",
    },
    maskedName: {
      type: Boolean,
      value: false,
    },
    price:{
      type: Boolean,
      value: false,
    },
    color:{
      type: String,
      value: "#333",
    },
    gradient:{
      type: String,
      value: "",
    },
    size: {
      type:String,
      optionalTypes:[Number],
      value: "32",
    }
  },
  /**
   * 逐渐生命周期
   */
  lifetimes: {
    attached() {
     this.optionHandle();
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
      const {size,maskedName, text,gradient,price} = this.data;
      console.log(size);
      if(!isNaN(size)){
        this.setData({size:size+"rpx"})
      }
      if(!gradient.includes('gradient')){
        this.setData({gradient:""})
      }else{
        this.setData({color:"transparent"})
      }
      if (maskedName && text) {
        switch (text.length) {
          case 1:
            null
            break;
          case 2:
            this.setData({text:`${text[0]}*`})
            break;
          default:
            this.setData({text:`${text[0]}*${text[text.length-1]}`})
            break;
        }
      }
      if(price){
        this.setData({text:(text*1).toFixed(2)})
      }
    },
  },
});
