// components/button/button.js
Component({
  /**
   * 外部样式类
   */
  externalClasses:["qs-class"],
  /**
   * 共享特性
   */
  behaviors: ["wx://form-field-button"],
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: "",
    },
    type: {
      type: String,
      value: "",
    },
    inline: {
      type: Boolean,
      value: false,
    },
    plain: {
      type: Boolean,
      value: false,
    },
    // default, large, small
    size: {
      type: String,
      value: "",
    },
    // circle, square
    shape: {
      type: String,
      value: "square",
    },
    disabled: {
      type: Boolean,
      value: false,
    },
    link: {
      type: Boolean,
      value: false,
    },
    loading: {
      type: Boolean,
      value: false,
    },
    long: {
      type: Boolean,
      value: false,
    },
    openType: String,
    formType: String,
    appParameter: String,
    hoverStopPropagation: Boolean,
    hoverStartTime: {
      type: Number,
      value: 20,
    },
    hoverStayTime: {
      type: Number,
      value: 70,
    },
    lang: {
      type: String,
      value: "en",
    },
    sessionFrom: {
      type: String,
      value: "",
    },
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      if (this.data.disabled) return false;
      this.triggerEvent("click");
    },
    bindgetuserinfo({ detail = {} } = {}) {
      this.triggerEvent('getuserinfo', detail);
  },
  bindcontact({ detail = {} } = {}) {
      this.triggerEvent('contact', detail);
  },
  bindgetphonenumber({ detail = {} } = {}) {
      this.triggerEvent('getphonenumber', detail);
  },
  binderror({ detail = {} } = {}) {
      this.triggerEvent('error', detail);
  },
  bindchooseavatar({ detail = {} } = {}) {
    this.triggerEvent('chooseavatar', detail);
}
  },
});
