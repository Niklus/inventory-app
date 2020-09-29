class Inventory {
  /**
   * @param {string[]} items
   */
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  exists(item) {
    return this.items.includes(item);
  }
}

export default Inventory;