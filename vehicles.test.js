/*
  Tests for the Vehicle and Car Classes

      Object-Oriented Programming Practice
      Unit #12 of Springboard SWE Bootcamp 
      Solution by José Delpino
*/

/** Global variables */
const myVehicle = new Vehicle("Honda", "Monster Truck", 1999);
const myCar = new Car("Toyota", "Corolla", 2005);
const myMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
const notVehicle = "Not a vehicle";

/** Tests for the Vehicle Class*/
describe("Tests for Vehicle Class on `myVehicle` instance", () => {
  it("should create a object with the right properties", function () {
    expect(myVehicle.make).toBe("Honda");
    expect(myVehicle.model).toBe("Monster Truck");
    expect(myVehicle.year).toBe(1999);
  });

  it("should create a vehicle with functional methods", function () {
    expect(myVehicle.honk()).toBe("Beep.");
    expect(myVehicle.toString()).toBe(
      "The vehicle is a Honda Monster Truck from 1999."
    );
  });
});

/** Tests for the Car Class*/
describe("Tests for Car Class on `myCar` instance", () => {
  it("should create a car with the right properties", function () {
    expect(myCar.make).toBe("Toyota");
    expect(myCar.model).toBe("Corolla");
    expect(myCar.year).toBe(2005);
    expect(myCar.numWheels).toBe(4);
  });

  it("should create a car with functional methods", function () {
    expect(myCar.honk()).toBe("Beep.");
    expect(myCar.toString()).toBe(
      "The vehicle is a Toyota Corolla from 2005. It's a car."
    );
  });
});

/** Tests for the Motorcycle Class*/
describe("Tests for Motorcycle Class on `myMotorcycle` instance", () => {
  it("should create a motorcycle with the right properties", function () {
    expect(myMotorcycle.make).toBe("Honda");
    expect(myMotorcycle.model).toBe("Nighthawk");
    expect(myMotorcycle.year).toBe(2000);
    expect(myMotorcycle.numWheels).toBe(2);
  });

  it("should create a Motorcycle with functional methods", function () {
    expect(myMotorcycle.honk()).toBe("Beep.");
    expect(myMotorcycle.toString()).toBe(
      "The vehicle is a Honda Nighthawk from 2000. It's a motorcycle."
    );
    expect(myMotorcycle.revEngine()).toBe("VROOM!!!");
  });
});

/** Tests for the Garage Class */
describe("Tests for Garage Class using global vehicles...", function () {
  it("should initialize with an empty vehicles array and a given capacity", function () {
    const garage = new Garage(2);
    expect(garage.vehicles).toEqual([]);
    expect(garage.capacity).toEqual(2);
  });

  it("should only add instances of Vehicle to the vehicles array", function () {
    const garage = new Garage(2);
    expect(garage.add(myVehicle)).toBe("Vehicle added");
    expect(garage.vehicles).toContain(myVehicle);
    expect(garage.add(notVehicle)).toBe("Only vehicles are allowed in here!");
  });

  it("should not add a vehicle if the garage is at capacity", function () {
    const garage = new Garage(1);
    garage.add(myVehicle);
    expect(garage.add(myCar)).toBe("Sorry, we're full.");
  });

  it("should not add a vehicle if it's already in the garage", function () {
    const garage = new Garage(2);
    garage.add(myMotorcycle);
    expect(garage.add(myMotorcycle)).toBe(
      "The vehicle was already inside the garage!"
    );
  });
});
