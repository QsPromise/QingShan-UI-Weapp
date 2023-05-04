// components/list/list.js
Component({
  externalClasses: ['qs-class'],
  /**
   * 组件关系
   */
  relations: {
    '../cell/cell': {
        type: 'child',
        linked () {
            this._updateIsLastCell();
        },
        linkChanged () {
            this._updateIsLastCell();
        },
        unlinked () {
            this._updateIsLastCell();
        }
    }
},
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _updateIsLastCell() {
      let cells = this.getRelationNodes('../cell/cell');
      const len = cells.length;

      if (len > 0) {
          let lastIndex = len - 1;
          cells.forEach((cell, index) => {
              cell.updateIsLastCell(index === lastIndex);
          });
      }
  }
  }
})
