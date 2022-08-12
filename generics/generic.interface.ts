interface Identity<T, U> {
  value: T,
  message: U,
}

/* interface ProcessIdentity<T, U> {
  (value: T, message: U): T
} */

/* interface ProcessIdentity<T, U> {
  value: T,
  message: U,
  process(): T,
} */

// declarando variavel usando interface Identity

let returnNUmber: Identity<number, string> = {
  value: 25,
  message: 'Hello!'
}

let returnStr: Identity<string, number> = {
  value: 'Hello!',
  message: 25
}

/* function processIdentity<T, U> (value: T, message: U): T {
  console.log(message);
  return value;
} */

// let processor: ProcessIdentity<number, string> = processIdentity;
// let rNumber = processor(100, 'Hello!');
// console.log(rNumber);
// let rString = processor('Hello!', 100);

/* class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value
  }
} */

// let processor = new processIdentity<number, string>(100, 'Helloooo!');
// processor.process();
// processor.value = 100;

// definição de classe generica sem interface

class processIdentity<T, U> {
  private _value: T;
  private _message: U;
  constructor(
    value: T,
    message: U,
  ) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}

let processes = new processIdentity<number, string>(100, 'Helloooooo!');
processes.getIdentity();