/** OOP Excercise */

/** Class representing a Vehicle. */
class Vehicle {
  /** Creates a new vehicle.
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

  /** Returns a string with a human readable description of the vehicle.
   * @returns {string}
   * */
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

/* Class representing a Car. */
class Car extends Vehicle {
  /** Createas a new car with
   * inherited parameters from Vehicle class:
   * @param {string} make
   * @param {string} model
   * @param {number} year
   */
  constructor(make, model, year) {
    super(make, model, year);
    /** @property {number} numWheels - The number of wheels for a car */
    this.numWheels = 4;
  }

  /** Returns a description of the car.
   * @returns {string}
   */
  toString() {
    return super.toString() + " It's a car.";
  }
}

/** Class representing a Motorcycle, a type of Vehicle with 2 wheels. */
class Motorcycle extends Vehicle {
  /** Creates a new motorcycle with
   * inherited parameters from Vehicle class:
   * @param {string} make
   * @param {string} model
   * @param {number} year
   */
  constructor(make, model, year) {
    super(make, model, year);
    /** @type {number} - The number of wheels for a motorcycle */
    this.numWheels = 2;
  }

  /** Returns a description of the motorcycle.
   * @returns {string}
   */
  toString() {
    return super.toString() + " It's a motorcycle.";
  }

  /** Returns a string representing the engines's reving sound.
   * @returns {string}
   * */
  revEngine() {
    return "VROOM!!!";
  }
}

/** Class representing Garage for storing vehicles.
 *
 * It stores and array of different kinds of vehicles.
 * Each instance mush have a maximum capacity and every
 * new garage starts empty.
 */
class Garage {
  /** Creates a new garage.
   * @param {number} capacity - The max num of vehicles agarage can store.
   */
  constructor(capacity) {
    this.capacity = capacity;
    /** @property {Array.<Vehicle>} vehicles - The vehicles stored in the garage. */
    this.vehicles = [];
  }

  /** Adds a new vehicle to the garage.
   * @param {Vehicle} vehicle - The vehicle to be added.
   * @returns {string} - A message indicating if the vehicle was added
   *                     or not and why.
   */
  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    } else if (this.vehicles.includes(vehicle)) {
      // This step is necessary but it'll be more efficient
      // if we use sets instead of arrays to store vehicles.
      return "The vehicle was already inside the garage!";
    } else if (this.capacity === this.vehicles.length) {
      return "Sorry, we're full.";
    } else {
      this.vehicles.push(vehicle);
      return "Vehicle added";
    }
  }
}
