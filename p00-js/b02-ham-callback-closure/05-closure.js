// // Phần A: bộ đếm dùng closure
// function taoBoDem() {
//   let dem = 0; // biến cục bộ, sẽ được bỏ vào "ba lô"
//   return () => {
//     dem = dem + 1;
//     return dem;
//   };
// }

// const demDonHang = taoBoDem();
// console.log(demDonHang()); // ?
// console.log(demDonHang()); // ?
// console.log(demDonHang()); // ?

// const demKhachHang = taoBoDem(); // gọi lại → một ba lô MỚI
// console.log(demKhachHang()); // ?
// console.log(demDonHang()); // ?

// console.log(dem); // THỬ: bỏ // → ReferenceError, bên ngoài không thấy dem

// // Phần B: "nhà máy" tạo hàm (ứng dụng thực tế của closure)
// function taoHamGiamGia(tyLe) {
//   return (gia) => Math.round(gia * (1 - tyLe));
// }
// const giaHangVang = taoHamGiamGia(0.1); // ba lô chứa tyLe = 0.1
// const giaHangBac = taoHamGiamGia(0.05); // ba lô chứa tyLe = 0.05
// console.log(giaHangVang(1000000));
// console.log(giaHangBac(1000000));

// Phần C: nối lại với bài trước: var vs let trong vòng lặp
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("var i =", i), 100);
}
// for (let j = 1; j <= 3; j++) {
//   setTimeout(() => console.log("let j =", j), 100);
// }
