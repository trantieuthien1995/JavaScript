function tinhTong(array){
    sum = 0;
    sum = array.reduce((acc, cur) => acc = acc+cur,0);
    return sum;
}
let arr1 = [1, 2, 3, 4, 5, 6];
let result1 = tinhTong(arr1);
console.log(`Tổng của arr1 là ${result1}`);
let arr2 = [10, 20, 30, 40, 50];
let result2 = tinhTong(arr2);
console.log(`Tổng của arr2 là ${result2}`);
let arr3 = [1, 3, 5, 7, 9];
let result3 = tinhTong(arr3);
console.log(`Tổng của arr3 là ${result3}`);