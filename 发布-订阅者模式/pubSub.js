/** 
 * 发布订阅者(观察者模式)
 * handles: 事件处理函数集合
 * on：订阅事件
 * emit：发布事件
 * off：删除事件
 **/

class PubSub {
  constructor() {
    this.handles = {}
  }

  on(eventType, handles) {
    if (!this.handles.hasOwnProperty(eventType)) {
      this.handles(eventType) = []
    }

    if (typeof handles === 'function') {
      this.handles(eventType).push(eventType)
    } else {
      throw new Error('缺少回调函数')
    }
    return this
  }


}