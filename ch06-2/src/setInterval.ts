const peried = 1000;
let count = 0;
console.log('program stared');
const id = setInterval(() => {
    if (count >= 3) {
        clearInterval(id);
        console.log('program finished');
    } else {
        console.log(++count);
    }

}, peried);