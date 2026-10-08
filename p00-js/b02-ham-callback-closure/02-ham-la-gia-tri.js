const inHoa = (chuoi) => chuoi.toUpperCase();
const themChamThan = (chuoi) => chuoi + "!";

// xuLy nhận một HÀM làm tham số → đây là higher-order function
function xuLy(chuoi, hamXuLy) {
  return hamXuLy(chuoi); // gọi lại hàm được truyền vào → đó chính là callback
}

console.log(xuLy("xin chào", inHoa));
console.log(xuLy("xin chào", themChamThan));
console.log(xuLy("xin chào", (s) => s.length)); // viết hàm ngay tại chỗ gọi

// Callback ĐỒNG BỘ có sẵn trong JS: forEach
const diem = [7, 10, 5, 8];
diem.forEach((d, viTri) => {
  console.log(`Vị trí ${viTri}: ${d} điểm`);
});

// sort nhận callback so sánh (giống Comparator trong Java)
const tangDan = [...diem].sort((a, b) => a - b); // [...diem] tạo bản sao để không sửa mảng gốc
console.log(tangDan);

// BẪY: sort() không truyền callback thì so sánh theo CHUỖI
console.log([10, 9, 1].sort());
