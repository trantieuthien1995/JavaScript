const checkParity = (value) => {
    if (isNaN(value)) {
        console.log(value + " không phải là số");
    } else {
        if (value % 2 === 0) {
            console.log(value + " là số chẵn");
        } else {
            console.log(value + " là số lẻ");
        }
    }
};

let value = prompt("Nhập vào số bạn cần kiểm tra");
checkParity(value);