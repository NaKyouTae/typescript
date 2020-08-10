type NumberToNumber = (number: number) => number;

export const f = (a: number, b: number, c: number): NumberToNumber => (x: number): number => a * x ** 2 + b * x + c;

console.log(f(1, 2, 3,)(2));



import * as R from 'ramda';

export const exp = (N: number) => (x: number): number => x ** N;
export const square = exp(2);

export const ft = (a: number, b: number, c: number): NumberToNumber => (x: number): number => R.add(a * square(x) + b * x, c);

console.log(ft(1, 2, 3)(2));


export const ftr = (a: number, b: number, c: number): NumberToNumber => (x: number): number => R.add(R.multiply(a)(square(x)) + R.multiply(b)(x), c);

console.log(ftr(1, 2, 3)(2));

export const ff = (a: number, b: number, c: number): NumberToNumber => (x: number): number => R.add(R.add(R.multiply(a)(square(x)))(R.multiply(b)(x)), c);
console.log(ff(1, 2, 3)(2));