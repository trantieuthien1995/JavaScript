function register(){
    let username = document.getElementById("Email").value;
    let password = document.getElementById("Password").value; 
    let confirmPassword = document.getElementById("confirmPassword").value; 
    if(username !== "" && password !== "" && password === confirmPassword){
        alert("Đăng ký thành công");
        localStorage.setItem("user",JSON.stringify(username));
        localStorage.setItem("password",JSON.stringify(password));
        localStorage.setItem("confirmPassword",JSON.stringify(confirmPassword));
    } else {
        event.preventDefault();
        alert("Đăng ký không thành công, vui lòng kiểm tra lại Email hoặc Password");
    }
}
