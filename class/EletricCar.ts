import Car from './Car';

class EletricCar extends Car {
  // Properties unique eletric car
  private _range: number;
  private static _numbersEletricCars = 0;
  // constructor
  constructor(
    make: string,
    color: string,
    range: number,
    doors = 2,
  ) {
    super(make, color, doors);
    this._range = range;
  }
  // accessors
  get range(): number {
    return this._range;
  }

  public static numberOfEletricCars(): number {
    return this._numbersEletricCars;
  }

  set range(range) {
    this._range = range;
  }

  charge(): void {
    console.log(`${this.worker()} is charging`)
  }

  // override method break superClass Car
  break(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`
  }
}

let spark = new EletricCar('Spark Motors','silver', 124, 2);
let eCar = new EletricCar('Electric Car Co.', 'black', 263);

console.log(eCar.doors);
spark.charge();
console.log(spark.break());