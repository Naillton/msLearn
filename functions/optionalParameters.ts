interface obj {
  x: number,
  y?: number
}
  
function params({x, y}: obj): number {
  if (y === undefined) {
    return x;
  }
  return x + y;
}

function numbers(x: number, y?: number) {
  if (y === undefined) {
    return x;
  }
  return x + y;
}
  
// console.log(params({x: 5, y: 6}));