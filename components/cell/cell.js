// components/cell/cell.js
const err = (_msg,_val)=>{
  console.error(_msg);
  console.log('接收到的值为：',_val);
  throw _msg
}
Component({
  externalClasses:["qs-class"],
  relations: {
    '../list/list': {
        type: 'parent'
    }
},
options: {
  multipleSlots: true
},
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String,
      value:""
    },
    value:{
      type:String,
      value:""
    },
    label:{
      type:String,
      value:""
    },
    isLink:{
      type: Boolean,
      value: false
    },url:{
      type:String,
      value:""
    },
    onlyTapAccess: {
      type: Boolean,
      value: false
    },
    linkType:{
      type:String,
      value:'navigateTo'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isLastCell:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(){
      const {url,isLink,linkType} = this.data,type = typeof isLink;
      this.triggerEvent("click");
      if(!isLink||!url||url==='true'||!url==='false') return;
      if (!['navigateTo', 'redirectTo', 'switchTab', 'reLaunch'].includes(linkType)) {
        console.log(3);
        return err('linkType 属性可选值为 navigateTo，redirectTo，switchTab，reLaunch',linkType)
      }
      wx[linkType]({url})
    },
    updateIsLastCell (isLastCell) {
      this.setData({ isLastCell });
    }
  }
})
