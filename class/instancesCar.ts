import Car from './Car';

// intantiates class
let myCar1 = new Car('GTR', 'Black and Red', 2);
let myCar2 = new Car('GTR', 'Black and Red', 4);

console.log(myCar2.accelerate(45));
console.log(myCar1.accelerate(100));
console.log(myCar1.turn('right'));
console.log(myCar1.break());

console.log(Car.getNumbersOfCars());