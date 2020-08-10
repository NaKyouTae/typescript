import * as R from 'ramda';


const aIndex = R.pipe(
    // R.addIndex(R.map)(R.add),
    // R.addIndex(R.map),
    R.addIndex(R.map)((value: number, index: number) => R.add(value)(index)),
    R.tap(a => console.log(a))
);

const newNumbers = aIndex(R.range(1, 10));