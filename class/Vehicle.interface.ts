interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  break(): string;
  turn(direction: 'left' | 'right'): string;
}

export default Vehicle;