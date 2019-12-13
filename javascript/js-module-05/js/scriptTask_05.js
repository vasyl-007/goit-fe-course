// Task_05
function task_05() {
  class Car {
    static getSpecs(car) {
      console.log(`
      Максимальная скорость: ${car._maxSpeed},
      текущая скорость: ${car._speed},
      автомобиль заведен: ${car._isOn},
      пробег авто: ${car._distance},
      стоимость: ${car._price}.`);
    }
    constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
      this._speed = speed;
      this._price = price;
      this._maxSpeed = maxSpeed;
      this._isOn = isOn;
      this._distance = distance;
    }
    get price() {
      return this._price;
    }
    set price(price) {
      this._price = price;
    }
    turnOn() {
      this._isOn = true;
    }
    turnOff() {
      this._isOn = false;
      this._speed = 0;
    }
    accelerate(value) {
      if (this._speed + value <= this._maxSpeed) {
        this._speed += value;
      } else {
        console.log(
          `Attention!!! Вы пытаетесь превысить максимально допустимую безопасную скорость на ${this
            ._speed +
            value -
            this._maxSpeed}`
        );
      }
    }
    decelerate(value) {
      if (this._speed - value >= 0) {
        this._speed -= value;
      }
    }
    drive(hours) {
      if (this._isOn === true) {
        this._distance += hours * this._speed;
      }
    }
  }

  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);

  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();

  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000
}
// ===============================================
