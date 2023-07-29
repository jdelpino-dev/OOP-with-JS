/**
 * Vehicle Class.
 * @class
 */
class Vehicle {
  /** Constructor */

  /**
   * * Create a point.
   * * @param {string} make - vehicle's brand
   * * @param {string} model - vehicle's model
   * * @param {number} year - vehicle's year
   */
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  /** Public Methods */

  /**
   * @returns {string} - A description of the vehicle
   */
  honk() {
    return "Beep.";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

/**
 * Car Class. It represents a car inheriting from the Vehicle class.
 * It has a default ptoperty of number of wheels equal to 4.
 * @class
 */
class Car extends Vehicle {
  /** Constructor */

  /**
   * Uses the Vehicle constructor to create a new car and
   * adds a property of number of wheels with a default value of 4.
   */
  constructor(make, model) {
    super(make, model);
    this.numWheels = 4;
  }

  /** Public Methods */

  /**
   * Overrides the parent method toString piggybacking and altering its output.
   * @returns {string}
   */
  toString() {
    return super().toString + " It's a car.";
  }
}

/**
 * Motorcycle Class. It represents a motorcycle inheriting from the Vehicle class.
 * It has a default property of number of wheels equal to 2 and
 * method call revEngine.
 * @class
 */
class Car extends Vehicle {
  /** Constructor */

  /**
   * Uses the Vehicle constructor to create a new car and
   * adds a property of number of wheels with a default value of 4.
   */
  constructor(make, model) {
    super(make, model);
    this.numWheels = 2;
  }

  /** Public Methods */

  /**
   * Overrides the parent method toString piggybacking and altering its output.
   * @returns {string}
   */
  toString() {
    return super().toString + " It's a motorcycle.";
  }
}
