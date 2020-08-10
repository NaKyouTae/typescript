import * as R from 'ramda';

const newLteGt = R.pipe(
    R.filter(R.lte(3)),
    R.filter(R.gt(7)),
    R.tap(a => console.log(a))
)(R.range(1, 11));

const newGt = R.pipe(
    R.filter(R.gt(7)),
    R.filter(R.gt(7)),
    R.tap(a => console.log(a))
)(R.range(1, 11));

const newLte = R.pipe(
    R.filter(R.lte(3)),
    R.filter(R.lte(3)),
    R.tap(a => console.log(a))
)(R.range(1, 11));