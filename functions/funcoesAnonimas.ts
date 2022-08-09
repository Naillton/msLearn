let subNumbers = function (x: number, y: number): number {
  return x -y;
}

console.log(subNumbers(3, 3));

let result = function (numbers: number[]): number {
  let total: number = 0;
  for(let i = 0; i < numbers.length; i++) {
    if(isNaN(numbers[i])) {
      continue;
    }

    total += Number(numbers[i]);
  }
  return total;
}

console.log(result([1, 2, 3]));