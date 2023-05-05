// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    list:[
      {name:"布局",list:[
        {litle:"Layout 栅格系统",url:"/pages/layout/layout"},
        {litle:"List 列表",url:"/pages/list/list"},
        {litle:"Grid 宫格",url:"/pages/grid/grid"},
        {litle:"Card 卡片",url:"/pages/card/card"},
      ]},
      {name:"基础",list:[
        {litle:"Text 文字",url:"/pages/text/text"},
        {litle:"Icon 图标",url:"/pages/icon/icon"},

      ]},
      {name:"导航",list:[]},
      {name:"交互",list:[]},
      {name:"表单",list:[]},
    ]
  },

  onLoad() {
  },
  
  onShareAppMessage(){

  }
})
