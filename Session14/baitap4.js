let original = {
    name: "Bob",
    age: 30,
};
let copy = {};
for(let key in original){
    copy[key] = original[key];
};
copy.name = "Charlie";
console.log(original);
console.log(copy);