const pipe2 = <T>(...functions: readonly Function[]): Function => (x: T): T => {
    return functions.reduce((value, func) => func(value), x);
}
const map = (f: any) => (a: any) => a.map(f);

// const map = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f);

const square = (value: any) => value * value;
const squaredMap = map(square);

const fourSquare = pipe2(
    squaredMap, squaredMap
)

console.log(fourSquare([3, 4]));