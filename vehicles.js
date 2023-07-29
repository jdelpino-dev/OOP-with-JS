/** Class representing a Vehicle. */
class Vehicle {
  /**
   * * @param {string} make - vehicle's brand
   * * @param {string} model
   * * @param {number} year
   */
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /** Returns a string representing the vehicle's honk */
  honk() {
    return "Beep.";
  }

  /**
   * Returns a string with a human readable description of the vehicle.
   * @returns {string}
   * */
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

/**
 * Class representing a Car.
 */
class Car extends Vehicle {
  /**
   * Inherited parameters from Vehicle class:
   * @param {string} make
   * @param {string} model
   * @param {number} year
   */
  constructor(make, model, year) {
    super(make, model, year);
    /** @property {number} numWheels - The number of wheels for a car */
    this.numWheels = 4;
  }

  /**
   * Returns a description of the car.
   * @returns {string}
   */
  toString() {
    return super.toString() + " It's a car.";
  }
}

/**
 * Class representing a Motorcycle, a type of Vehicle with 2 wheels.                               (default is 2).
 */
class Motorcycle extends Vehicle {
  /**
   * Inherited parameters from Vehicle class:
   * @param {string} make
   * @param {string} model
   * @param {number} year
   */
  constructor(make, model, year) {
    super(make, model, year);
    /** @property {number} numWheels - The number of wheels for a motorcycle */
    this.numWheels = 2;
  }

  /**
   * Returns a description of the motorcycle.
   * @returns {string}
   */
  toString() {
    return super.toString() + " It's a motorcycle.";
  }

  /**
   * Returns a string representing the engines's reving sound.
   * @returns {string}
   * */
  revEngine() {
    return "VROOM!!!";
  }
}
