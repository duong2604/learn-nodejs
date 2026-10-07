// == tự đổi kiểu, === thì không
console.log(5 == "5"); // ?
console.log(5 === "5"); // ?
console.log(0 == false); // ?
console.log(0 === false); // ?
console.log(null == undefined); // ?
console.log(null === undefined); // ?
console.log(NaN === NaN); // ? (bẫy!)
console.log(Number.isNaN(NaN)); // cách đúng để kiểm tra NaN

// Truthy / Falsy: giá trị nào được coi là true/false trong câu if
console.log("Boolean(0)         →", Boolean(0));
console.log('Boolean("")        →', Boolean(""));
console.log("Boolean(null)      →", Boolean(null));
console.log("Boolean(undefined) →", Boolean(undefined));
console.log("Boolean(NaN)       →", Boolean(NaN));
console.log('Boolean("0")       →', Boolean("0"));
console.log('Boolean(" ")       →', Boolean(" "));
console.log("Boolean([])        →", Boolean([]));
console.log("Boolean({})        →", Boolean({}));
