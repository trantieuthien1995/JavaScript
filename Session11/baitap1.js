let nam = Number(prompt("Mời bạn nhập vào năm dương lịch"));
if((nam %4 ===0) && (nam %100 !==0) || (nam %400 ===0)){
    alert(`${nam} là năm nhuận`);
} else {
    alert(`${nam} không phải là năm nhuận`);
}