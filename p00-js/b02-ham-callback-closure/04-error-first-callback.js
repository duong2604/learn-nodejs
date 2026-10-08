const fs = require("node:fs");

fs.readFile("du-lieu.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Lỗi đọc file: ", err.code);
    return;
  }
  console.log("Content:", data);
});

console.log("Đã giao việc đọc file, làm việc khác trước...");
