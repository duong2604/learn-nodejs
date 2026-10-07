const tenKhach = "Nguyễn Văn An";
const tenSanPham = "Bàn phím cơ";
const donGia = 1250000;
const soLuong = 2;
const thueVAT = 0.08; // 8%
const laThanhVien = true; // thành viên được giảm 5%

const thanhTien = donGia * soLuong;
let giamGia = 0;
if (laThanhVien === true) {
  giamGia = Math.round(thanhTien * 0.05);
}
let sauGiam = Math.round(thanhTien - giamGia);
const tienVAT = Math.round(sauGiam * thueVAT);
const tongCong = sauGiam + tienVAT;

const hoaDon = `
===== HÓA ĐƠN =====
Khách hàng : ${tenKhach}
Sản phẩm   : ${tenSanPham} x ${soLuong}
Thành tiền : ${thanhTien.toLocaleString("vi-VN")}
Giảm giá   : ${giamGia.toLocaleString("vi-VN")}
Sau giảm   : ${sauGiam.toLocaleString("vi-VN")}
VAT (8%)   : ${tienVAT.toLocaleString("vi-VN")}
TỔNG CỘNG  : ${tongCong.toLocaleString("vi-VN")}
`;

console.log(hoaDon);
