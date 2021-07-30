module.exports = class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else {
      return null;
    }
  }

  getTop() {
    if (this.items.length == 0) return null;
    return this.top;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }
};
