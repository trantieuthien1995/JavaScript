function isPalindrome(input){
    let right = input.length-1;
    for(let i = 0;i <= input.length/2;i++){
        if(input[i] !== input[right])
        return false;
        right--;
        } 
        return true;
    }
    let input = prompt("Nhập vào một chuỗi ký tự");
let result = isPalindrome(input);
if(result === true){
    alert("Chuỗi ký tự đối xứng");
} else {
    alert("Chuỗi ký tự không đối xứng")
}