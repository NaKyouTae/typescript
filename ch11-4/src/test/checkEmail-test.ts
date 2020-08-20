
import { checkEmail } from '../checkEmail';

[
    { email: 'abc@efg.com' },
    { email: 'abcdefadasd' },
].forEach((target, index) => {
    const [value, failureReson] = checkEmail(target.email);

    if (failureReson) {
        console.log(index, 'validation fail', JSON.stringify(failureReson));
    } else {
        console.log(index, 'validation ok', JSON.stringify(value))
    }
})