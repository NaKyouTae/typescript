import * as R from 'ramda';

type StringToStringFunc = (string: string) => string;
export const toCamelCase = (delim: string): StringToStringFunc => {
    const makeFirstToApital = (word: string) => {
        const char = word.split('');
        return char.map((c, index) => index == 0 ? c.toUpperCase() : c).join('');
    }
    const indexedMap = R.addIndex(R.map);
    return R.pipe(
        R.trim,
        R.split(delim),
        R.map(R.toLower),
        indexedMap((value: any, index: number) => index > 0 ? makeFirstToApital(value) : value),
        R.join('')
    ) as StringToStringFunc
}


console.log(toCamelCase(' ')(' Hello world '), toCamelCase('_')('Hello_Albert_Einstein'));