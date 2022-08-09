let addNumbers2 = (x: number, y: number): number => x + y;

let total12 = (numbers: number[]): number => {
  let total: number = 0;
  for( let i = 0; i < numbers.length; i ++) {
    if(isNaN(numbers[i])) continue;
    total += Number(numbers[i]);
  }
  return total;
}

console.log(total12([6, 6]));