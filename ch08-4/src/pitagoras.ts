const pipe3 = <T>(...functions: readonly Function[]): Function => (x: T): T => {
    return functions.reduce((value, func) => func(value), x);
}

const map1 = (f: any) => (a: any) => a.map(f);

// const map = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f);

const square1 = (value: any) => value * value;
const squaredMap1 = map1(square1);



const reduce1 = <T>(f: (sum: T, value: T) => T, initValue: T) => (a: T[]): T => a.reduce(f, initValue);

const sum1 = (result: any, value: any) => result + value;

const sumArray1 = reduce1(sum1, 0);

const pitagoras = pipe3(squaredMap1, sumArray1, Math.sqrt);

console.log(pitagoras([4, 4]));