class house {
  constructor(bedroomCount, buildingMterial, floorCount, price) {
    this.bedroomCount = bedroomCount;
    this.buildingMterial = buildingMterial;
    this.floorCount = floorCount;
    this.price = `$${price}.00`;
  }
// describe is a method, they is a function of the classes
  describe() {
    console.log(`This lovely ${this.bedroomCount} bedroom house, made out of ${this.buildingMterial}, with ${this.floorCount} floor(s), is currently on the market for ${this.price}`);
  }
}

const house1 = new house(3, 'brick', 2, 500);
const house2 = new house(10, 'steel', 3, 501);

console.log(house1);
console.log(house2);

house2.describe();