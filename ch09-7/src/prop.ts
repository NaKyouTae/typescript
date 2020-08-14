import * as R from 'ramda';
import Chance from 'chance';

const c = new Chance;
export type PPerson = {
    name: string;
    age: number;
    title?: string;
};
export const makeIPerson = (name: string, age: number, title: string) => ({ name, age, title });
export const makeRandomIPerson = (): PPerson => makeIPerson(c.name(), c.age(), c.profession());

const person: PPerson = makeRandomIPerson();
const name = R.compose(
    R.prop('name'),
    R.tap(a => console.log(a))
)(person as any);