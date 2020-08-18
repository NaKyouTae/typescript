import { Validation } from '../classes/Validation';
import { checkNull } from './checkNull';
import { checkLength } from './checkLength';

export const checkPassword = (o): [any, any] => {
    const result = Validation.of(a => b => o)
        .ap(checkNull(o))
        .ap(checkLength(o))

    return result.isSuccess ? [result.value, undefined] : [undefined, result.value];
}