// const reduce = (f: any, initValue: any) => (a: any) => a.reduce(f, initValue);

const reduce = <T>(f: (sum: T, value: T) => T, initValue: T) => (a: T[]): T => a.reduce(f, initValue);

const sum = (result: any, value: any) => result + value;

const sumArray = reduce(sum, 0);