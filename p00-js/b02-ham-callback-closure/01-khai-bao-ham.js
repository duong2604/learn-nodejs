// 1. Function declaration
function tinhTong(a, b) {
  return a + b;
}

// 2. Function expression: gán một hàm vào biến
const tinhHieu = function (a, b) {
  return a - b;
};

// // 3. Arrow function: các cách viết rút gọn
// const tinhTich = (a, b) => a * b; // 1 biểu thức → tự động return
// const binhPhuong = (x) => x * x; // 1 tham số → bỏ được ngoặc ()
// const chao = () => "Xin chào"; // không tham số → bắt buộc có ()
// const taoKhach = (ten) => ({ ten, hang: "Bạc" }); // trả về object → bọc trong ()

// console.log(tinhTong(2, 3));
// console.log(tinhHieu(10, 4));
// console.log(tinhTich(3, 4));
// console.log(binhPhuong(5));
// console.log(chao());
// console.log(taoKhach("An"));

// // 4. Tham số mặc định (default parameter)
// function tinhGia(donGia, soLuong = 1) {
//   return donGia * soLuong;
// }
// console.log(tinhGia(50000));
// console.log(tinhGia(50000, 3));

// // 5. Rest parameter: gom mọi tham số còn lại thành một mảng
// function tongTatCa(...cacSo) {
//   console.log("cacSo là:", cacSo);
//   let tong = 0;
//   for (const so of cacSo) {
//     tong += so; // viết tắt của: tong = tong + so
//   }
//   return tong;
// }
// console.log(tongTatCa(1, 2, 3, 4));

// // 6. Hai trường hợp ra undefined
// function khongTraVe() {}
// console.log(khongTraVe()); // hàm không có return
// console.log(tinhTong(2)); // thiếu tham số b → b là undefined
