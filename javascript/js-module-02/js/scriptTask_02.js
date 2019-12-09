// Task_02

function task_02() {
  function calculateEngravingPrice(message, pricePerWord) {
    const array = message.split(" ");
    const price = array.length * pricePerWord;
    return price;
  }

  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      10
    )
  ); //80
  console.log(
    calculateEngravingPrice(
      "Proin sociis natoque et magnis parturient montes mus",
      20
    )
  ); // 160
  console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40)); // 200
  console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20)); // 100
}
// ======================================
