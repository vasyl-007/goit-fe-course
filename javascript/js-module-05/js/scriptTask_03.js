// Task_03
function task_03() {
  class Storage {
    constructor(array) {
      this.items = array;
    }
    getItems() {
      return this.items;
    }
    addItem(item) {
      return this.items.push(item);
    }
    removeItem(item) {
      if (this.items.includes(item)) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        return this.items;
      } else {
        alert(`Невозможно удалить! ${item} не значится на складе`);
      }
    }
  }
  const storage = new Storage([
    "Нанитоиды",
    "Пролонгер",
    "Железные жупи",
    "Антигравитатор"
  ]);
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

  storage.addItem("Дроид");
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

  storage.removeItem("Пролонгер");
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
}
// ======================================
