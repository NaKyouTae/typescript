import { ILocation, makeILocation, makeRandomILocation } from '../location/model';
import Chance from 'chance';

const c = new Chance;

export type IPerson = {
    name: string;
    age: number;
    title?: string;
    location?: ILocation;
};

export const makeIPerson = (name: string, age: number, title: string, location: ILocation) => ({ name, age, title, location });

export const makeRandomIPerson = (): IPerson => makeIPerson(c.name(), c.age(), c.profession(), makeRandomILocation());

const person: IPerson = makeRandomIPerson();