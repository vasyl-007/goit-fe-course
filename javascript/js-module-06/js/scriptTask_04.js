// Task_04
function task_04() {
  class StringBuilder {
    constructor(string) {
      this._value = string;
    }
    get value() {
      return this._value;
    }
    append(str) {
      this._value += str;
    }
    prepend(str) {
      this._value = str + this._value;
    }
    pad(str) {
      this._value = str + this._value;
      this._value = this._value + str;
    }
  }
  const builder = new StringBuilder(".");

  builder.append("^");
  console.log(builder.value); // '.^'

  builder.prepend("^");
  console.log(builder.value); // '^.^'

  builder.pad("=");
  console.log(builder.value); // '=^.^='
}
// =========================================
// // task 4 (второй вариант решения с использованием сеттеров)

// class StringBuilder {
//   constructor(string) {
//     this._value = string;
//   }
//   get value() {
//     return this._value;
//   }
//   set append(str) {
//     this._value += str;
//   }
//   set prepend(str) {
//     this._value = str + this._value;
//   }
//   set pad(str) {
//     this._value = str + this._value;
//     this._value = this._value + str;
//   }
// }
// const builder = new StringBuilder(".");

// builder.append = "^";
// console.log(builder.value); // '.^'

// builder.prepend = "^";
// console.log(builder.value); // '^.^'

// builder.pad = "=";
// console.log(builder.value); // '=^.^='
