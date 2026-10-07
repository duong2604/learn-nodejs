// typeof cho biết kiểu của một giá trị
console.log(typeof "Xin chào"); // ?
console.log(typeof 42); // ?
console.log(typeof 3.14); // ?
console.log(typeof true); // ?
console.log(typeof undefined); // ?
console.log(typeof null); // ?
console.log(typeof 10n); // ? (chữ n ở cuối = bigint)
console.log(typeof { ten: "An" }); // ?
console.log(typeof [1, 2, 3]); // ?
console.log(Array.isArray([1, 2, 3])); // cách đúng để kiểm tra mảng

let chuaGan;
console.log(chuaGan); // biến khai báo nhưng chưa gán

// Những điều "lạ" của kiểu number
console.log(0.1 + 0.2);
console.log(10 / 0);
console.log("abc" * 2); // NaN = Not a Number
console.log(Number("123") + 1); // đổi chuỗi sang số
console.log(Number("12a"));
console.log(Number.MAX_SAFE_INTEGER); // số nguyên lớn nhất còn chính xác
