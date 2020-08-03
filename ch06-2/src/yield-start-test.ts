function* gen12() {
    yield 1
    yield 2
}

function* getn12345() {
    yield* gen12()
    yield* [3, 4]
    yield 5
}

for (let item of getn12345())
    console.log(item);