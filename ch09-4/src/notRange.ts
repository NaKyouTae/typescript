import * as R from 'ramda';
import { selectRange } from './selectRange';

export const notRange = (min: number, max: number) => R.pipe(selectRange(min, max), R.not);

R.pipe(
    R.filter(notRange(3, 7)),
    R.filter(notRange(3, 7)),
    R.tap(n => console.log(n))
)(R.range(1, 10 + 1));