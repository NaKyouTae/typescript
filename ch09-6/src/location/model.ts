import { ICoordinates, makeICoordinates, makeRandomICoordinates } from '../coordinates/model'
import Chance from 'chance';

const c = new Chance;

export type ILocation = {
    country: string;
    city?: string;
    address?: string;
    coordinates?: ICoordinates
}

export const makeILocation = (country: string, city: string, address: string, coordinates: ICoordinates): ILocation => ({ country, city, address, coordinates });

export const makeRandomILocation = (): ILocation => makeILocation(c.country(), c.city(), c.address(), makeRandomICoordinates());

const location: ILocation = makeRandomILocation();

console.log(location);