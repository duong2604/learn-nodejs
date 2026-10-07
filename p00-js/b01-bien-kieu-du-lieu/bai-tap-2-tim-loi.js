const khoA = "5"; // số lượng kho A, đọc từ form nên là CHUỖI
const khoB = 5; // số lượng kho B, là SỐ

if (khoA === khoB) {
  console.log("Hai kho có số lượng bằng nhau");
}

console.log(`Tổng tồn kho: ${Number(khoA) + khoB}`);

let phiShip = 30000;
phiShip = 0; // khách VIP được miễn phí ship
console.log(`Phí ship: ${phiShip}`);

//  Danh sách 4 vấn đề ở bài tập 2
/**
 * Vấn đề 1: Biến sử dụng var
 * Vấn đề 2: so sánh sử dụng "=="
 * Vấn đề 3: Tính tổng tồn kho với giá trị thuộc kiểu string
 * Vấn đề 4: Gán lại giá trị phí ship cho một biến được khai báo const
 */
