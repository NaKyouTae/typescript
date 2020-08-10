import * as R from 'ramda';

export const f1 = (a: number, b: number, c: number): any => (x: number): number => a * x ** 2 + b * x + c;

// export const exp1 = (N: number) => (x: number): number => x ** N;
// export const square1 = exp1(2);

export const quadratic = f1(1, 2, 1);

const input: number[] = R.range(1, 11);

const quadraticResult = R.pipe(R.map(quadratic), R.tap(a => console.log(a)))(input);