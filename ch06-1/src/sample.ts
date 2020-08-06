class StringIterable implements Iterable<String> {
    constructor(private strings: string[] = [], private currentIndex: number = 0) { }
    [Symbol.iterator](): Iterator<string> {
        const that = this;
        let currentIndex = that.currentIndex, length = that.strings.length;

        const iterator: Iterator<string> = {
            next(): { value: string, done: boolean } {
                const value: any = currentIndex < length ? that.strings[currentIndex++] : undefined;
                const done = value == undefined;
                return { value, done };
            }
        }
        return iterator;
    }
}


class RangeIterable {
    constructor(public from: number, public to: number) { }
    [Symbol.iterator]() {
        const that = this;
        let currentValue = that.from;
        return {
            next() {
                const value = currentValue < that.to ? currentValue++ : undefined;
                const done = value == undefined;
                return { value, done };
            }
        }
    }
}

for (let value of new StringIterable(['hello', 'world', '!']))
    console.log(value);


const iterator = new RangeIterable(1, 3 + 1);
for (let value of iterator)
    console.log(value);
