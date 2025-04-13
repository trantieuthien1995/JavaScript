/*bai 1*/
let person = {
    name: "Tran Van A",
    age: 18,
    adress: "HCM",
    phone: 123456789,
};
for(let key in person){
    console.log(`${key}: ${person[key]}`);
}

/*bai 2*/

let student = [{
    id: 1,
    name: "Nguyen Van A",
    gender: "nam",
    age: 20,
    mark: 8,
}];
let newStudent = [{
    id: 2,
    name: "Nguyen Thi B",
    gender: "nu",
    age: 18,
    mark: 9,
}];
let students = student.concat(newStudent);
  for(let index in students){
        console.log("ID", students[index].id);
        console.log("Name:", students[index].name);
        console.log("Gender", students[index].gender);
        console.log("Age", students[index].age);
        console.log("Mark", students[index].mark);
        console.log("-----------------------------");
    }
/*bai 3*/ 


   let max = students[0];
for(let i = 0; i< students.length; i++){
    if(students[i].mark>max.mark){
        max = students[i];
    }
}
console.log(max);