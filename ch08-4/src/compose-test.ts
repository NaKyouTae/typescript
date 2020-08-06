const compose1 = <T>(...functions: readonly Function[]): Function => (x: T): T => {
    const deepCopiedFunctions = [...functions];
    return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x);
}

const inc = (x: number) => x + 1;

const composed = compose1(inc, inc, inc);

console.log(composed(1));