const ten = "An";
const soDon = 3;
const tongTien = 1250000;

// Cách cũ: nối chuỗi bằng dấu +
console.log("Khách " + ten + " có " + soDon + " đơn hàng");

// Template literal: dùng backtick và ${...}
console.log(`Khách ${ten} có ${soDon} đơn hàng`);

// Bên trong ${} viết được cả biểu thức
console.log(`Trung bình mỗi đơn: ${tongTien / soDon} đ`);
console.log(`Tổng tiền: ${tongTien.toLocaleString("vi-VN")} đ`);

// Chuỗi nhiều dòng
const thongBao = `Xin chào ${ten},
Bạn có ${soDon} đơn hàng chờ xử lý.`;
console.log(thongBao);
