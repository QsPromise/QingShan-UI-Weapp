// components/col/col.js
Component({
  externalClasses: ['qs-class'],
  /**
   * 组件关系
   */
  relations: {
    '../col/col': {
        type: 'parent',
    }
},
  /**
   * 组件的属性列表
   */
  properties: {
    span: {
      value: 0,
      type: Number
  },
  offset: {
      value: 0,
      type: Number
  }
  },
})
