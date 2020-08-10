import * as R from 'ramda';

const subtract = (a: number) => (b: number) => a - b;

const subtractFrom10 = subtract(10);

const newArray = R.pipe(
    R.map(subtractFrom10),
    R.tap(a => console.log(a))
)(R.range(1, 10))