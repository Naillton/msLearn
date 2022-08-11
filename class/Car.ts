// import Vehicle from './Vehicle.interface';

// Em propriedades estaticas usamos a classe para referenciar o atributo e nao o this ex: Car._numbersOfCars
export default class Car {
  // Properties
  // static propertie
  private static _numbersOfCars: number = 0;
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(
    make: string,
    color: string,
    doors: number,
  ) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car._numbersOfCars += 1;
   }
  // Accessors
  get make(): string {
    return this._make;
  }

  get color(): string {
    return `The color of the car is ${this._color}`;
  }

  get doors(): number {
    return this._doors;
  }

  public static getNumbersOfCars(): number {
    return Car._numbersOfCars;
  }

  set make(make) {
    if (make.length >= 3 ) this._make = make;
    throw new Error('The make need have more three letters');
  }

  set color(color) {
    if (color.length >= 3 ) this._color = color;
    throw new Error('The color need have more three letters');
  }

  set doors(doors) {
    if ((doors % 2) === 0) this._doors = doors;
    throw new Error('Doors must be an even number');
  }
  // Methods
  accelerate(speed: number): string {
    return `${speed} kms per hour`
  }

  break(): string {
    return `the ${this.worker()} is stopping`;
  }

  turn(direction: 'left' | 'right'): string {
    return `turning to ${direction}`;
  }

  protected worker(): string {
    return this._make;
  }
}