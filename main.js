/*
Bài 1: tính tiền lương nhân viên
Lương 1 ngày = 100.000
- Đầu vào: 
    + Nhập số ngày, (cho số ngày nhân viên làm)
    + Hệ số lương: 100.000
- Xử lý:
    Lương = Lấy số ngày * 100.000
- Đầu ra: In kết quả
*/

// Đầu vào
var ngaylam = 20;
var hesoluong = 100000;
// Xử lý
var luong = ngaylam * hesoluong;
// Đầu ra
var xuat = "Lương của nhân viên làm " + ngaylam + " ngày là: " + luong
console.log(xuat);

/*
Bài 2: Tính giá trị trung bình của 5 số 
- Đầu vào: 5 số
- Xử lý:
    + Tính tổng của 5 số.
    
- Đầu ra: Xuất kết quả
    + Tổng 5 số / 5.
*/

// Đầu vào
var sothu1 = 1;
var sothu2 = 2;
var sothu3 = 3;
var sothu4 = 4;
var sothu5 = 6;
// Xử lý
var tong5so = sothu1 + sothu2 + sothu3 + sothu4 + sothu5;
// Đầu ra
console.log("Giá trị trung bình 5 số là: " + tong5so / 5);

/* 
Bài 3: Quy đổi tiền USD sang VND
Đầu vào: 
    + Tỷ giá 1 USD = 23500 VNĐ.
    + Số USD cần quy đổi thành VNĐ.
Xử lý:
    + Số tiền VNĐ quy đổi = tỷ giá (23500) * số USD cần quy đổi
Đầu ra: Xuất giá trị VNĐ đã quy đổi
*/
// Đầu vào
var tygia = 23500;
var usdquydoi = 2;
// Xử lý
var vnd = tygia * usdquydoi;
// Đầu ra
// console.log("Số USD cần quy đổi là: " + usdquydoi);
console.log("Số tiền sau quy đổi: " + vnd + " VND");

/**
Bài 4
Tính diện tính và chu vi hình chữ nhật.
Đầu vào:
    + Chiều dài hình cn
    + Chiều rộng hình cn
Xử lý:
    + Diện tích hcn S = C.dài * C.rộng;
    + Chu vi P = (tong) / *2
        * tong = c.dài + c.rộng
Đầu ra:
    + Xuất diện tích S
    + Xuất chu vi P
 */
// Đầu vào
var cdai = 10;
var crong = 5;
// Xử lý
var S = cdai * crong;
var tonghcn = cdai + crong;
var P = tonghcn * 2;
// Đầu ra
console.log("Diện tích hình chữ nhật là: " + S);
console.log("Chu vi hình chữ nhật là: " + P);

/**
Bài 5: tổng 2 ký số của số vừa nhập.
Đầu vào: số cần tính
Xử lý: 
    + Số hàng chục = số cần tính /10;
    + Số hàng đơn vị = số cần tính % 10;
    + Tổng ký số = Số hàng chục + số hàng đơn vị;
Đầu ra: Xuất kết quả (tổng ký số);
 */

// Đầu vào
var sonhap = 12;
// Xử lý
var sohangchuc = Math.floor(sonhap / 10);
var sohangdv = Math.floor(sonhap % 10);
var tongkyso = sohangchuc + sohangdv;
// Đầu ra
console.log("Tổng 2 ký số của số đã cho là: " + tongkyso);