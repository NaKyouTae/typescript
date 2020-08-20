import { Validation } from './classes/Validation';
import { checkNull } from './utils/checkNull';
import { checkEmailAddress } from './utils/checkEmailAddress';

export const checkEmail = (o): [object, string[]] => {
    const result = Validation.of((a: any) => o).ap(checkEmailAddress(o));
    return result.isSuccess ? [result.value, []] : [[], result.value];
}