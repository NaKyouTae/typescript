import { IO } from '../classes/IO';
import * as R from 'ramda';

const work = () => ({ name: 'jane', age: 23 });

const result = IO.of(work).map(R.view(R.lensProp('name'))).map(R.toUpper).runIO();
console.log(result);