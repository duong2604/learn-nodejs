const taoGioHang = () => {
  const danhSach = [];
  const them = (ten, gia) => danhSach.push({ ten, gia });
  const soMon = () => danhSach.length;
  const tongTien = () => {
    let gia = 0;
    for (const sanPham of danhSach) {
      gia += sanPham.gia;
    }
    return gia;
  };
  return { them, soMon, tongTien };
};

const gio = taoGioHang();
gio.them("Bàn phím", 1250000);
gio.them("Chuột", 350000);

console.log(gio.soMon());
console.log(gio.tongTien().toLocaleString("vi-VN"));
console.log(gio.danhSach); // phải ra undefined → bên ngoài không truy cập được
