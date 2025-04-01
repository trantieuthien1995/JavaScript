let studentList = [
    {
        name: "Tran Van A",
        age: 20,
        id: 123456,
    },
    {
        name: "Nguyen Thi B",
        age: 19,
        id: 123789,
    },
];

while(true){
    let input = prompt("Hãy nhập vào tác vụ add/list/delete/exit");
if(input === "add"){
    let name = prompt("Mời bạn nhập tên mới");
    let age = prompt(`Mời bạn nhập tuổi mới cho ${name}`);
    let id = prompt(`Mời bạn nhập id mới cho ${name}`);
    let contact = {
        name: name,
        age: age,
        id: id,
    }
    studentList.push(contact);
displayContact();
} else if(input === "list"){
displayContact();
} else if(input === "delete"){
    let id = Number(prompt("Mời bạn nhập ID muốn xóa"));
    let index =studentList.findIndex(function(el, i){
        return el.id == id;
    });
    if(index=== -1){
        console.log("Bạn nhập sai, vui lòng nhập lại");
    } else{
        studentList.splice(index,1);
        displayContact();
    }
} else if(input === "exit"){
    console.log("Cảm ơn bạn đã sử dụng app của chúng tôi");
    break;
} else{
    console.log("Bạn nhập sai, vui lòng nhập lại");
}
}

function displayContact(){
    console.log("Your StudentList:");
    for(let index in studentList){
        console.log("Name:", studentList[index].name);
        console.log("Age", studentList[index].age);
        console.log("ID", studentList[index].id);
        console.log("-----------------------------");
    }
}



/*while(true){
    let input = prompt("Hãy nhập vào tác vụ add/list/delete/exit");
if(input === "add"){
    let name = prompt("Mời bạn nhập tên mới");
    let age = prompt(`Mời bạn nhập tuổi mới cho ${name}`);
    let contact = {
        id: Math.random(),
        name: name,
        age: age,
    }
    studentList.push(contact);
displayContact();
} else if(input === "list"){
displayContact();
} else if(input === "delete"){
    let name = prompt("Mời bạn nhập tên muốn xóa");
    let index =studentList.findIndex(function(el, i){
        return el.name === name;
    });
    if(index=== -1){
        console.log("Bạn nhập sai, vui lòng nhập lại");
    } else{
        studentList.splice(index,1);
        displayContact();
    }
} else if(input === "exit"){
    console.log("Cảm ơn bạn đã sử dụng app của chúng tôi");
    break;
} else{
    console.log("Bạn nhập sai, vui lòng nhập lại");
}
}

function displayContact(){
    console.log("Your StudentList:");
    for(let index in studentList){
        console.log("Name:", studentList[index].name);
        console.log("Age", studentList[index].age);
        console.log("-----------------------------");
    }
}*/