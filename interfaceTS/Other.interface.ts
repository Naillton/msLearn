interface IceCreamArray {
  [index: number]: string;
}

let my_IceCream: IceCreamArray;
my_IceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = my_IceCream[0];
console.log(myStr);