let number = [1, 2, 3, 4, 4, 5, 2, 1, 5, 6, 7, 4, 1, 3, 5, 4, 5, 4, 8, 9];
let input = Number(prompt("Nhập vào một số nguyên bất kì"));
let count = 0
for(let i = 1;i <number.length; i++){
    if(input===number[i]){
        count++
    }
}alert(count);