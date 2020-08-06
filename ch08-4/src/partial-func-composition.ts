const pipe1 = <T, R>(...functions: readonly Function[]): Function => (x: T): T => {
    return functions.reduce((value, func) => func(value), x);
}

const add = (x: any) => (y: any) => x + y;
const inc1 = add(1);

const add3 = pipe1(inc1, add(2));

console.log(add3(1));
console.log(add(1)(0));
console.log(add(2)(2));