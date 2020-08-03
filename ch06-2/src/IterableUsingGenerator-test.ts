class InterableUsingGenerator<T> implements Iterable<T> {
    constructor(private values: T[] = [], private currentIndex: number = 0) { }

    [Symbol.iterator] = function* () {
        while (this.currentIndex < this.values.length)
            yield this.values[this.currentIndex++]
    }
}

for (let item of new InterableUsingGenerator([1, 2, 3, 4, 5, 6]))
    console.log(item);