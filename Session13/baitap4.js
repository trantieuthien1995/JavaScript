let input = prompt("Nhập vào dãy số bất kì");
let substrings = input.split(" ");
let max = substrings[0];
let index = 0;
for(let i= 0; i< substrings.length; i++){
if(substrings[i]>max){
    max = substrings[i];
    index = i;
}
}
console.log(max);