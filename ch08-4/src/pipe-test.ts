const pipe = <T, R>(...functions: readonly Function[]): Function => (x: T) => (test: T) => (test1: R) => {
    return functions.reduce((value, func) => func(value), x);
}

const f1 = <T>(x: T): any => `f(${x})`;
const g1 = <T>(x: T): any => `g(${x})`;
const h1 = <T>(x: T): any => `h(${x})`;

const piped = pipe(f1, g1, h1);
console.log(piped(123)()());