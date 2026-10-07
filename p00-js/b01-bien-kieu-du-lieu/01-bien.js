// 1. const: gán một lần, không gán lại được
const appName = "Mini CRM";
console.log(appName);

// 2. let: gán lại được
let soKhachHang = 10;
soKhachHang = soKhachHang + 5;
console.log(soKhachHang);

// 3. Phạm vi khối (block scope): let chỉ sống bên trong cặp {}
if (true) {
  let bienTrongKhoi = "chỉ sống trong cặp {}";
  console.log(bienTrongKhoi);
}
// console.log(bienTrongKhoi); // THỬ: bỏ dấu // ở đầu dòng → ReferenceError

// 4. var "thoát" ra khỏi khối → đây là lý do không dùng var
if (true) {
  var bienVar = "tôi thoát ra ngoài khối!";
}
console.log(bienVar);

// 5. const với object: không gán lại biến, nhưng SỬA ĐƯỢC bên trong
const khachHang = { ten: "An", tuoi: 30 };
khachHang.tuoi = 31;
console.log(khachHang);
// khachHang = {}; // THỬ: bỏ dấu // → TypeError: Assignment to constant variable.
