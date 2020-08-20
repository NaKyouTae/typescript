function replaceAll(str: string, searchStr: string, replaceStr: string) {

    return str.split(searchStr).join(replaceStr);
}

let texts = new Array
const development = new Map<any, any>();

const xlsx = require("xlsx");

const excelFile1 = xlsx.readFile("./src/설계.xlsx");
const sheetName1 = excelFile1.SheetNames[0];
const firstSheet1 = excelFile1.Sheets[sheetName1];
const jsonData1 = xlsx.utils.sheet_to_json(firstSheet1, { defval: "0", header: 1 });

const excelFile2 = xlsx.readFile("./src/개발.xlsx");
const sheetName2 = excelFile2.SheetNames[0];
const firstSheet2 = excelFile2.Sheets[sheetName2];
const jsonData2 = xlsx.utils.sheet_to_json(firstSheet2, { defval: "0", header: 1 });

for (var w = 0; w < jsonData2.length; w++) {
    let index: string = jsonData2[w][0].toString()
    let status: string = jsonData2[w][2].toString()
    // console.log("index", index);
    // console.log("status", status);
    development.set(index, status);

}


// development.forEach((index: string, status: string) => console.log(status + ', ' + index));

const keyArray = new Array();

for (var i = 1; i < jsonData1.length; i++) {
    let data: string = jsonData1[i][13].toString()
    data = replaceAll(data, "다음 일감과 관련됨: #", "");
    data = replaceAll(data, ",", "");
    keyArray.push(data.split(" "));

    for (var j = 0; j <= keyArray.length; j++) {

    }
}

const obj: any = {};

development.forEach((value, key) => {
    let keys = key.split(".");
    let last = keys.pop();

    keys.reduce((r, a) => r[a] = r[a] || {}, obj)[last] = value;
})

// console.log(obj);

const array = keyArray.filter(item => item != 0);

// console.log(keyArray.toString())

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//         console.log(array[i][j], development.get(parseInt(array[i][j])), development.get(array[i][j]), eval("development[" + array[i][j] + "]"));
//     }
// }

const a = Object.values(obj).filter(item => item == '수용').length;
const b = Object.values(obj).filter(item => item == '완료').length;
const c = Object.values(obj).filter(item => item == '신규').length;
const d = Object.values(obj).filter(item => item == '해결').length;

console.log(a, b, c, d);
