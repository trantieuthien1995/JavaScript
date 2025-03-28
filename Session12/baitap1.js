let a = Number(prompt("Mời bạn nhập số a"));
let b = Number(prompt("Mời bạn nhập số b"));
if(a%b===0){
    alert("a chia hết cho b");
} else {
    alert("a không chia hết cho b");
}

let age = Number(prompt("Mời bạn nhập số tuổi"));
if(age >= 15){
    alert("Bạn đủ tuổi vào lớp 10");
} else {
    alert("Bạn không đủ tuổi vào lớp 10");
}

let int = Number(prompt("Mời bạn nhập một số nguyên bất kỳ"));
if(int === parseInt(int) && int > 0){
    alert("Đây là số nguyên lớn hơn 0");
} else  if(int === parseInt(int) && int < 0){
    alert("Đây là số nguyên nhỏ hơn 0");
} else  if(int !== parseInt(int)){
    alert("Bạn nhập sai, vui lòng nhập lại!");
}

let numA = Number(prompt("Mời bạn nhập số nguyên thứ nhất"));
let numB = Number(prompt("Mời bạn nhập số nguyên hai"));
let numC = Number(prompt("Mời bạn nhập số nguyên thứ ba"));
if(numA === parseInt(numA) && numB === parseInt(numB) && numC === parseInt(numC)){
alert("Số nguyên lớn nhất là:" + " " + Math.max(numA, numB, numC));
} else{
    alert("Bạn nhập sai, vui lòng nhập lại!");
}

let kiemTra = Number(prompt("Mời bạn nhập điểm bài kiểm tra"));
let giuaKy = Number(prompt("Mời bạn nhập điểm thi giữa kỳ"));
let cuoiKy = Number(prompt("Mời bạn nhập điểm thi cuối kỳ"));
let result = ((kiemTra + giuaKy*2 + cuoiKy*3)/6 );
if(result >= 9 && result <=10){
    alert("Xuất sắc");
} else if(result >=8 && result <9){
    alert("Giỏi");
} else if(result >=7 && result <8){
    alert("Khá");
} else if(result >=5 && result <7){
    alert("Trung bình");
} else if(result < 5){
    alert("Yếu");
}