let cannang = Number(prompt("Xin mời nhập cân nặng (kg)"));
let chieucao = Number(prompt("Xin mời nhập chiều cao (m)"));
let result = cannang / ((chieucao) * (chieucao));
/*console.log(result);
let check = true;*/
if (result <= 18.5) {
    alert("Cân nặng thấp (gầy)");
} else if (result >= 18.5 && result <= 24.9) {
    alert("Bình thường");
}
  /*else if (result > 25) {
    alert("Thừa cân");
}*/
  else if (result >= 25 && result <= 29.9) {
    alert("Tiền béo phì");
    check = false;
} else if (result >= 30 && result <= 34.9) {
    alert("Béo phì độ I");
    check = false;
} else if (result >= 35 && result <= 39.9) {
    alert("Béo phì độ II");
    check = false;
} else if (result >= 40) {
    alert("Béo phì độ III");
}

//     check = false;
// }
// if (check === false) {
//     alert("thừa cân")
// }
// switch (true) {
//     case result <= 18.5:
//         console.log(1);
// //         break;
// //     case result >= 25 && result <= 29.9:
// //         console.log(2);
// //         break;

// //     default:
// //         break;
// }