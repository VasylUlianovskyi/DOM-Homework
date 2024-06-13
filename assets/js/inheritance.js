class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate);
  }

  get age() {
    let age = new Date().getFullYear() - this.manufactureDate.getFullYear();
    return age;
  }
  getFullInfo() {
    return `Brand: ${this.brand}, Model: ${this.model}, Age:${this.age} years`;
  }
}

const vehicle = new Vehicle(
  { length: 4.5, width: 2.0, height: 1.5 },
  "Toyota",
  "Camry",
  "2015-06-15"
);
console.log(vehicle.age);
console.log(vehicle.getFullInfo());

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = passengerLimit;
    this.passengerCount = passengerCount;
  }

  addPassenger() {
    if (this.passengerCount < this.passengerLimit) {
      this.passengerCount++;
    } else {
      throw new RangeError("Passanger count is out of limit");
    }
  }

  getFullInfo() {
    return `${super.getFullInfo()}, Max Passengers: ${
      this.passengerLimit
    }, Current Passengers: ${this.passengerCount} `;
  }
}

const passengerTransport = new PassengerTransport(
  { length: 4.5, width: 2.0, height: 1.5 },
  "Mercedes-Benz",
  "Sprinter",
  "2018-05-10",
  12,
  10
);
passengerTransport.addPassenger();
passengerTransport.addPassenger();
// passengerTransport.addPassenger(); -Помилка, перевищений ліміт пасажирів
console.log(passengerTransport.getFullInfo());

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }

  checkLoadingPossibility(weight) {
    return weight <= this.capacity;
  }

  getFullInfo() {
    return `${super.getFullInfo()}, Capacity: ${this.capacity} kg`;
  }
}

const freightTransport = new FreightTransport(
  { length: 7.0, width: 2.5, height: 3.0 },
  "Volvo",
  "FH16",
  "2020-03-20",
  2000
);

console.log(freightTransport.checkLoadingPossibility(1500));
console.log(freightTransport.checkLoadingPossibility(2000));
console.log(freightTransport.checkLoadingPossibility(2500));
console.log(freightTransport.getFullInfo());
