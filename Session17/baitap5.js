function login(e){
    event.preventDefault();
    let username = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;  
    let user = "huanrose@gmail.com";
    let pass = "123456";
    if(username == user && password == pass){
        alert("Đăng nhập thành công");
        window.location.href="login.html";
    } else{
        alert("Đăng nhập không thành công")
    }
}