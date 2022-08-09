interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

/* let myIceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2,
} */

// console.log(myIceCream.flavor);

const tooManyScoops = (obj: IceCream): string => {
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
console.log(nutella);