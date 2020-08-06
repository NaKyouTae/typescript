const compose = <T>(...functions: readonly Function[]): Function => (x: T): T => {
    const deepCopiedFunctions = [...functions];
    return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x);
}


const f = <T>(x: T): any => `f(${x})`;
const g = <T>(x: T): any => `g(${x})`;
const h = <T>(x: T): any => `h(${x})`;

const composeFGH = compose(h, g, f);
console.log(composeFGH(123));

