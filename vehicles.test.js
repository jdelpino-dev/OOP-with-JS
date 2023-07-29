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

/** Tests for the Vehicle Class*/
describe("Tests for Vehicle Class on `myVehicle` instance", () => {
  it("Should create a object with the right properties", function () {
    expect(myVehicle.make).toBe("Honda");
    expect(myVehicle.model).toBe("Monster Truck");
    expect(myVehicle.year).toBe(1999);
  });

  it("Should create a vehicle with functional methods", function () {
    expect(myVehicle.honk()).toBe("Beep.");
    expect(myVehicle.toString()).toBe(
      "The vehicle is a Honda Monster Truck from 1999."
    );
  });
});

/** Tests for the Car Class*/
describe("Tests for Car Class on `myCar` instance", () => {
  it("Should create a car with the right properties", function () {
    expect(myCar.make).toBe("Toyota");
    expect(myCar.model).toBe("Corolla");
    expect(myCar.year).toBe(2005);
    expect(myCar.numWheels).toBe(4);
  });

  it("Should create a car with functional methods", function () {
    expect(myCar.honk()).toBe("Beep.");
    expect(myCar.toString()).toBe(
      "The vehicle is a Toyota Corolla from 2005. It's a car."
    );
  });
});

/** Tests for the Motorcycle Class*/
describe("Tests for Motorcycle Class on `myMotorcycle` instance", () => {
  it("Should create a motorcycle with the right properties", function () {
    expect(myMotorcycle.make).toBe("Honda");
    expect(myMotorcycle.model).toBe("Nighthawk");
    expect(myMotorcycle.year).toBe(2000);
    expect(myMotorcycle.numWheels).toBe(2);
  });

  it("Should create a Motorcycle with functional methods", function () {
    expect(myMotorcycle.honk()).toBe("Beep.");
    expect(myMotorcycle.toString()).toBe(
      "The vehicle is a Honda Nighthawk from 2000. It's a motorcycle."
    );
    expect(myMotorcycle.revEngine()).toBe("VROOM!!!");
  });
});
