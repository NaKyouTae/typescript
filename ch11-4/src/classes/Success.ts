import { IFunctor, IApply } from '../interfaces/index';
import { IValidation } from './IValidation';

export class Success<T> implements IValidation<T>, IFunctor<T>, IApply<T> {
    constructor(public value: T, public isSuccess = true, public isFailure = false) { }

    static of<U>(value: U): Success<U> { return new Success<U>(value) };

    map<U>(fn: (x: T) => U) {
        console.log('map : ')
        return new Success<U>(fn(this.value));
    }

    ap(b) {
        return b.isFailure ? b : b.map(this.value);
    }
}