import * as R from 'ramda';

const input: number[] = R.range(1, 11);
const official = (N: number) => (x: number) => x ** N;
const squareAfterInc = R.pipe(R.inc, official(2));
const squareResult = R.pipe(R.map(squareAfterInc), R.tap(a => console.log(a)))(input);