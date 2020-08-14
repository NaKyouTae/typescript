import { mergeObjects } from './mergeObjects';

type INameable = { name: string };
type IAgeable = { age: number };

const nameAndAge: INameable & IAgeable = mergeObjects({ name: 'Jane', name1: 'Jack' }, { age: 22, age1: 32 });
console.log(nameAndAge);