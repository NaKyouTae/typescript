import { IMonad } from '../interfaces/IMonad';
import { _IMaybe } from './_IMaybe';

export class Nothing implements _IMaybe<null>, IMonad<null> {

    static of<T>(): Nothing { return new Nothing };

    isJust() { return false };
    isNothing() { return true };
    getOrElse<U>(defaultValue: U) { return defaultValue };

    map<U, V>(fn: (x) => U): Nothing { return new Nothing };

    ap<U>(b: U) { return new Nothing }

    chain<U>(fn: (T) => U): Nothing { return new Nothing }

}