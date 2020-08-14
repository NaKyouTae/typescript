import * as R from 'ramda';

export const makeLens = (propName: string) => R.lens(R.prop(propName) as any, R.assoc(propName));
export const getter = (lens: any) => R.view(lens);
export const setter = (lens: any) => <T>(newValue: T) => R.set(lens, newValue);
export const setterUsingFunc = (lens: any) => <T, R>(func: (T: any) => R) => R.over(lens, func);