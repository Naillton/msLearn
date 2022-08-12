// funcao do tipo any onde apesar de declarar um tipo perderiamos o poder de verificacao so ts
// ja que o tipo any engloba qualquer tipo

function getArray<T>(items: T[]): T[] {
  return items.map<T>((item) => item);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);
stringArray.push('Rabbits');             
// numberArray.push('This is not a number');
// stringArray.push(30);
console.log(numberArray);
console.log(stringArray);

type validTypes = string | number;

function identity<T extends validTypes, U>(value: T, message: U) {
  let result: validTypes = '';

  if ( typeof value === 'number') {
    result = value + value;
  } else if (typeof value === 'string') {
    result = value + value;
  }

  console.log(`The message is ${message} and the function return ${result}`);
   
  return result;
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');

console.log(returnNumber);
console.log(returnString);
// let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

// Usando keyof para que um tipo e objeto produza uma união de cadeia

function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key];
}

let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"};

console.log(getPets(pets1, "fish"));
console.log(getPets(pets2, 3));
