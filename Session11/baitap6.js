let a = Number(prompt("Mời bạn nhập số a"));
let b = Number(prompt("Mời bạn nhập số b"));
let input = prompt("Mời bạn nhập vào các phép tính (+, -, *, /)");
if (input === "+"){
    alert("Kết quả:" + " " + (a + b));
} else if (input === "-"){
    alert("Kết quả:" + " " + (a - b));
} else if (input === "*"){
    alert("Kết quả:" + " " + (a * b));
} else if (input === "/"){
    alert("Kết quả:" + " " + (a / b));
} else ("Bạn nhập sai, vui lòng nhập lại");
