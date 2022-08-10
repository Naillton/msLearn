// parametros tratados como um numero ilimitado de parametros opicionais
// usando a reticencias ...

let allNumbers = ( firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number = firstNumber;
  for(let count = 0; count < restOfNumbers.length; count++) {
    if (isNaN(restOfNumbers[count])){
      continue;
    }
    total += Number(restOfNumbers[count]);
  }
  return total;
}

console.log(allNumbers(1, 2, 3, 4, 5, 6, 7));