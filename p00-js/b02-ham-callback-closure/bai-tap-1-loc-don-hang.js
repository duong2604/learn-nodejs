const donHang = [
  { ma: "DH01", khach: "An", tong: 1200000, trangThai: "da_giao" },
  { ma: "DH02", khach: "Bình", tong: 350000, trangThai: "cho_xu_ly" },
  { ma: "DH03", khach: "An", tong: 2750000, trangThai: "da_giao" },
  { ma: "DH04", khach: "Chi", tong: 90000, trangThai: "da_huy" },
  { ma: "DH05", khach: "Bình", tong: 1500000, trangThai: "cho_xu_ly" },
];

// Hàm hỗ trợ in danh sách mã đơn (không cần sửa)
function inMa(tieuDe, ds) {
  let chuoi = "";
  for (const d of ds) {
    chuoi += d.ma + " ";
  }
  console.log(`${tieuDe}: ${chuoi}`);
}

const locDanhSach = (danhSach, dieuKien) => {
  const ketQua = [];
  for (const phanTu of danhSach) {
    if (dieuKien(phanTu)) {
      ketQua.push(phanTu);
    }
  }
  return ketQua;
};

inMa(
  "Trạng thái",
  locDanhSach(donHang, (phanTu) => phanTu.trangThai === "da_giao"),
);
inMa(
  "Tổng lớn hơn 1.000.000",
  locDanhSach(donHang, (phanTu) => phanTu.tong >= 1000000),
);
inMa(
  "Đơn của Bình",
  locDanhSach(donHang, (phanTu) => phanTu.khach === "Bình"),
);

inMa(
  "Lọc các đơn chờ xử lý và có tổng lớn hơn 1 triệu",
  locDanhSach(
    donHang,
    (phanTu) => phanTu.trangThai === "cho_xu_ly" && phanTu.tong >= 1000000,
  ),
);
