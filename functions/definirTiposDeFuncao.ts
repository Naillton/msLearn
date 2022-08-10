// type calculator = (x: number, y: number) => number;

interface calculator {
  (x: number, y: number): number;
}

let addNumber: calculator = (x: number, y: number): number => x + y;
let subtractNumber: calculator = (x: number, y: number): number => x - y;

console.log(addNumber(1, 2));
console.log(subtractNumber(2, 1));

let doCalculation = (operation: 'add' | 'subtract'): calculator => {
  if (operation === 'add') {
    return addNumber;
  }
  return subtractNumber;
}

console.log(doCalculation('add')(5, 5));