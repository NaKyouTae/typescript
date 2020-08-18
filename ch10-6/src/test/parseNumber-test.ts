import { parseNumber } from '../option/parseNumber';

let value = parseNumber('2').map(value => value + 1).map((value: number) => value + 2).getOrElse(0)
console.log(value);

value = parseNumber('hello world').map(value => value + 1).map((value: number) => value + 2).getOrElse(0);
console.log(value);
