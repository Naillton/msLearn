interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

/* let myIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2,
} */

// console.log(myIceCream.flavor);

/* const tooManyScoops = (obj: IceCream): string => {
  const { flavor, scoops } = obj;
  let result = '';
  if (scoops > 4) return result = 'is too many scoops!';
  return result = `IceCream ${flavor},
Your order will be ready soon!`;
}

const nutella = tooManyScoops(
  {
    flavor: 'nutella',
    scoops: 4,
  }
);
console.log(nutella); */

let myIceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'chocolate',
  nuts: true,
}

const tooManyScoops = (obj: Sundae): string => {
  const { scoops } = obj;
  if (scoops > 4) return 'is too many scoops!';
  return 'Your order will be ready soon!';
}

console.log(tooManyScoops({
  flavor: 'vanilla',
  scoops: 4,
  sauce: 'chocolate',
}));
