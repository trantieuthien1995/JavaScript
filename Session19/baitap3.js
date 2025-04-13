function login(){
    let username = document.getElementById("Email").value;
    let password = document.getElementById("Password").value; 
    let user = JSON.parse(localStorage.getItem("user"));
    let pass = JSON.parse(localStorage.getItem("password"));
    if(username == user && password == pass){
        alert("Đăng nhập thành công");
    } else{
        event.preventDefault();
        alert("Đăng nhập không thành công")
    }
}

let x = true;
function myPassword(){
if(x){
    document.getElementById("Password").type = "text";
    x = false;
} else{
    document.getElementById("Password").type = "password";
    x = true;
} 
}

