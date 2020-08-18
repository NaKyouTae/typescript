import { Identity } from '../classes/Identity';

const add = (x: any) => (y: any) => x + y;
console.log(
    add(1)(2),
    (Identity.of(add).ap(1) as any).ap(2).value()
)