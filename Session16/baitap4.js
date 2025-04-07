function isEven(number) {
    if(number%2===0){
    return true;
  } else {
    return false;
  }
}
let number = Number(prompt("Mời bạn nhập vào một số nguyên bất kì"));
  let result = isEven(number);
  if(result === true){
    alert(`${number} là số chẵn`);
} else {
    alert(`${number} là số lẻ`);
}