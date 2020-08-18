import { IValuable, ISetoid, IFunctor, IApply } from '../interfaces/indext';


export class Identity<T> implements IValuable<T>, ISetoid<T>, IFunctor<T>, IApply<T> {
    constructor(private _value: T) { }

    value() { return this._value }

    equals<U>(that: U): boolean {
        if (that instanceof Identity) {
            return this.value() === that.value();
        }
        return false;
    }

    map<U>(fn: (x: T) => U) {
        return new Identity<U>(fn(this.value()));
    }

    ap<U>(b: U) {
        const f = this.value();
        if (f instanceof Function) {
            return Identity.of<U>((f as Function)(b));
        }
    }

    static of<T>(value: T): Identity<T> {
        return new Identity<T>(value);
    }

    chain<U>(fn: (T) => U): U {
        return fn(this.value());
    }
}