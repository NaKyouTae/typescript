import * as R from 'ramda';
import { IO } from '../classes/IO';

const work1 = () => ({ name: 'Jane' });
const work2 = (obj) => () => ({ age: 23, ...obj });

const obj = IO.of(work1).chain((obj: object) => IO.of(work2(obj))).runIO();
console.log(obj);