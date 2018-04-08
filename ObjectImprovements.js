const car1 = {
  title: "x5",
  make: "bmw",
  price: 40000,
  describe: function() {
    console.log("describing car");
  }
};

let title = "x5",
  make = "bmw",
  price = 40000;

const car2 = {
  title,
  make,
  price,
  describe() {
    console.log("describing car");
  }
};
