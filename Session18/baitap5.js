let students = [];
function addStudent() {
    let name = document.getElementsByClassName("name")[0].value;
    let age = document.getElementsByClassName("age")[0].value;
    let className = document.getElementsByClassName("class_name")[0].value;
    let student = {
        name: name,
        age: age,
        class: className,
    }
    students.push(student);
    renderStudent(students);
    clear();
}
function renderStudent(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str+=
         `
        <tr>
                <td>${students[i].name}</td>
                <td>${students[i].age}</td>
                <td>${students[i].class}</td>
                <td ><input class="btn" id="edit" type="button" value="Sửa" onclick="editStudent(${i})"/>
                <input class="btn" id="delete" type="button" value="Xóa" onclick="deleteStudent(${i})"/></td>
            </tr>
        `
    }
    document.getElementById("tbody").innerHTML=str;
}
function deleteStudent(index){
    students.splice(index,1);
    renderStudent(students);
}
function search(){
    let searchValue = document.getElementById("search").value;
    let result = students.filter(item =>{
        return item.name.includes(searchValue);
    })
    renderStudent(result);
}

function editStudent(index){
    document.getElementsByClassName("name")[0].value=students[index].name;
    document.getElementsByClassName("age")[0].value=students[index].age;
    document.getElementsByClassName("class_name")[0].value=students[index].class;
    document.getElementById("index").value = index;
    document.getElementById("save").style.display = "none";
    document.getElementById("Update").style.display = "inline-block";
}

function changeStudent(){
    let index = document.getElementById("index").value
    students[index] = {
        name: document.getElementsByClassName("name")[0].value,
        age: document.getElementsByClassName("age")[0].value,
        class:document.getElementsByClassName("class_name")[0].value,
    }
    renderStudent(students);
    clear();
    document.getElementById("save").style.display = "inline-block";
    document.getElementById("Update").style.display = "none";
}
function clear(){
    document.getElementsByClassName("name")[0].value="";
    document.getElementsByClassName("age")[0].value="";
    document.getElementsByClassName("class_name")[0].value="";
}



