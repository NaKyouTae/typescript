import { IO } from '../classes/IO';

const work = () => {
    console.log('work called...');

    return { name: 'jack', age: 23 };
}

const result = IO.of(work).runIO();
console.log(result);