import Chance from 'chance';

export type ICoordinates = {
    latitude: number;
    longitude: number;
}

export const makeICoordinates = (latitude: number, longitude: number): ICoordinates => ({ latitude, longitude });

const c = new Chance;

export const makeRandomICoordinates = (): ICoordinates => makeICoordinates(c.latitude(), c.longitude());

const coordinates: ICoordinates = makeRandomICoordinates();